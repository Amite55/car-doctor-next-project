import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({service}) => {
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <Image width={420} height={120} src={service?.img} alt='card image' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <div className="card-actions justify-between items-center">
            <h3 className='text-primary font-bold'>Price : ${service.price}</h3>
            <Link href={`/services/${service._id}`}>
            <button className="btn btn-primary">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;