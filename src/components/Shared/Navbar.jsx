"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const session = useSession();
    console.log(session);



    const navLink = <>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/'} >Home</Link>
        </li>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/about'} >About</Link>
        </li>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/services'} >Services</Link>
        </li>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/my-bookings'} >MY Bookings</Link>
        </li>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/blogs'} >Blogs</Link>
        </li>
        <li className='font-semibold hover:text-primary'>
            <Link href={'/contact'} >Contact</Link>
        </li>

    </>

    return (
        <div className='bg-base-100 text-slate-900'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href={'/'}>
                        <Image alt='logo' src={'/assets/logo.svg'} width={80} height={60} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center'>
                        <IoCartOutline size={22} />
                        <IoSearchOutline size={22} />
                        <a className="btn btn-outline btn-primary text-primary px-8">Appointment</a>

                        {!session.data ? <Link href={'/login'}>
                                <button className="btn btn-primary text-primary btn-md">
                                    Login
                                </button>
                            </Link> : <button 
                            onClick={() => signOut()}
                            className="btn btn-primary text-primary btn-md">
                                Logout
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;