import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='text-slate-900 mb-20'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='relative gap-12 p-4 '>
                       <Image className='rounded-lg ' height={500} width={500} alt='about us' src={'/assets/images/about_us/person.jpg'}/>
                       <Image className='z-50  absolute -bottom-10 -right-3' height={400} width={300} alt='about us' src={'/assets/images/about_us/parts.jpg'}/>
                    </div>
                    <div className='space-y-8'>
                        <p className='text-primary font-semibold'>About Us</p>
                        <h3 className='text-4xl font-bold'>We are qualified & of experience in this field</h3>
                        <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. </p>
                        <p className='text-sm'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. 
                        </p>
                        <button className='btn btn-primary'>Ger More info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;