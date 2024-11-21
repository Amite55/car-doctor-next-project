import React from 'react';
import ServicesCard from '../Cards/ServicesCard';
import { getServices } from '@/services/getServices';



const Services = async () => {
    const {services} = await getServices();
    
    return (
        <div className='text-slate-800 min-h-screen '>
            <div className='container mx-auto text-center space-y-3'>
                <h3 className='text-xl font-bold text-primary'>Our Services</h3>
                <h3 className='text-4xl'>Service Area</h3>
                <p className='px-32'>the majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. </p>
            </div>
            <div className='container mx-auto gap-6 mt-12 grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => (
                        <ServicesCard key={service._id} service={service}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;