"use client"

import SocialSingin from '@/components/Shared/SocialSingin';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const page = async () => {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const newUser = {name, email, password};
        const resp = await fetch('http://localhost:3000/signup/api', {
            method: "POST", 
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(resp);
        if(resp.status === 200){
            e.target.reset()
            router.push('/')
        }
    }

    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div >
                    <Image width={540} height={540} src={'/assets/images/login/login.svg'} alt='login image' />
                </div>


                <div>
                    <section class=" text-slate-900">
                        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                                Car Doctor
                            </a>
                            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 class="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl ">
                                        Please Create A New Account
                                    </h1>
                                    <form
                                        onSubmit={handleRegister}
                                        class="space-y-4 md:space-y-6" action="#">
                                            <div>
                                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                            <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your Full Name" required />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your Email" required />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required />
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="remember" class="text-gray-500 ">Remember me</label>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <button type="submit" class="w-full text-white btn btn-primary">Sign in</button>
                                        <div className='divider'>or</div>
                                        <SocialSingin/>
                                        <p class="text-sm font-light text-gray-500 ">
                                            Don’t have an account yet? <Link href={'/login'} class="font-medium text-primary hover:underline ">Sign in</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default page;