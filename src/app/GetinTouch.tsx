'use client';
import React from 'react';
import CommercialOfferForm from './CommercialOfferForm';

function GetinTouch() {
  return (
    <section className='relative flex justify-around items-center w-full h-[33.25rem] mt-[10.5rem] bg-[rgba(8,26,20,0.74)] z-10'>
      
      <img 
        src="/assets/office-coffee.jpg" 
        alt="Office Coffee" 
        className='absolute top-0 left-0 w-full h-full object-cover z-0' 
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(8,26,20,0.74)] z-10" />

      <div className='relative z-20 w-[36.06rem]'>
        <h1 className="font-normal w-full text-[3.75rem] text-white">
          Office proposal for <br /> wholesalers
        </h1>
      </div>

      <div className='relative z-20'>
        <CommercialOfferForm />
      </div>

    </section>
  )
}

export default GetinTouch;
