"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialSingin = () => {
    const router = useRouter();
    const session = useSession()
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');

    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : '/'
        })
       
    }

    return (
        <div className='flex w-full justify-between gap-4'>
            <button 
            onClick={() => handleSocialLogin('google')}
            type="submit" class=" w-1/2 text-white btn btn-outline btn-primary">
                <FaGoogle size={24} className='text-blue-500' />
            </button>
            <button 
            onClick={() => handleSocialLogin('github')}
            type="submit" class="text-white btn w-1/2 btn-outline btn-primary">
                <FaGithub size={24} className='text-gray-600' />
            </button>
        </div>
    );
};

export default SocialSingin;