"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyBookingsPage = () => {
    const session = useSession();
    const [bookings, setBookings] = useState();

    const loadData = async () => {
        const res = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`)
        const data = await res.json();
        setBookings(data?.myBookings);
    }

    const handleDelete = async (id) => {
        const deleted = await fetch(`http://localhost:3000/my-bookings/api/booking/${id}`, {
            method: "DELETE"
        })
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
            toast.success('Deleted successfully!')
            loadData();
        }
    }

    useEffect(() => {
        loadData();
    }, [session])

    return (
        <div className='container mx-auto'>
            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={'/assets/images/about_us/parts.jpg'}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        My Bookings
                    </h1>
                </div>
            </div>
            {/* table */}
            <div className='mt-12 text-slate-900'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL NO</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Bookings Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings?.map((booking, index) => (
                                    <tr key={booking?._id}>
                                        <th>{index + 1}</th>
                                        <td>{booking?.title}</td>
                                        <td>{booking?.price}</td>
                                        <td>{booking?.date}</td>
                                        <td>
                                            <div className='flex gap-2 items-center'>
                                                <Link href={`/my-bookings/update/${booking?._id}`}>
                                                    <button className='btn btn-primary btn-outline'>Edit</button>
                                                    </Link>
                                                <button
                                                    onClick={() => handleDelete(booking?._id)}
                                                    className='btn bg-red-500'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyBookingsPage;