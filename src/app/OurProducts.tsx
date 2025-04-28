import React from 'react';
import { products, persons } from './data/products.js';



function OurProducts() {
  return (
    <section className="flex flex-col items-center w-full max-w-[114.125rem] mt-[6.9rem] mx-auto px-4">
      <div className="flex flex-col items-center w-full mt-[-3rem]">
        <h3 className="font-normal text-[5.6rem] text-[rgba(12,94,67,1)] text-center">
          Our Products
        </h3>
        <h6 className="text-[1.625rem] text-[rgba(0,3,53,1)] text-center">
          Premium Coffee, exquisite Tea
        </h6>

        <div className="flex flex-wrap justify-center gap-[1.5rem] mt-[10.5rem] w-full relative ">
            <img src="/assets/leaf3.png" alt="" className='absolute left-[-20rem] top-[-10rem] z-0 ' style={{ transform: 'rotate(-133deg)' }} />
            <img src="/assets/fon.png" alt="" className='absolute opacity-10 top-[-18rem]' />
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center w-[21.37rem] bg-white rounded-[10px] px-[1.61rem] pt-[0.6rem] z-10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[20rem] h-[20rem] object-cover"
              />
              <h4 className="self-start text-[1.875rem] text-[rgba(12,94,67,1)] leading-[5rem]">
                {product.name}
              </h4>
              <p className="text-[0.93rem] text-[rgba(0,3,53,1)] leading-[1.68rem]">
                {product.description}
              </p>

              <div className="flex w-full justify-between mt-[1.83rem]">
                <p className="text-[1.5rem] text-[rgba(0,3,53,1)] font-bold italic">
                  {product.size}
                </p>
                <div className="flex gap-[0.2rem] items-end">
                  <h1 className="font-normal pb-3 text-[1rem]">$</h1>
                  <p className="text-[1.5rem] text-[rgba(0,3,53,1)] font-bold italic">
                    {product.price}
                  </p>
                </div>
              </div>

              <button className='bg-[#FECF44] text-[rgba(5,109,72,1)] text-[1.23rem] rounded-[6.25rem] w-[13.68rem] h-[3rem] mt-[1.7rem] -mb-[0.6rem]'>
  Order in bulk
</button>
            </div>
          ))}
        </div>

        <h1 className="text-center text-[5.625rem] font-normal text-[rgba(12,94,67,1)] mt-[11.13rem]">Reviews</h1>
        <div className="flex flex-wrap justify-center gap-[1.5rem] mt-[10.5rem] w-full  relative px-[1.2rem] ">
                {/* <button><img src="/assets/arrowleft.svg" alt="" /></button>
                <button><img src="/assets/arrowright.svg" alt="" /></button>             */}
  {persons.map((person) => (
    <div key={person.id} className="flex flex-col gap-[1.2rem] bg-white w-[21.78rem]  h-[14rem]  px-[1.2rem] rounded-[10px]">
      <div className="relative">
        <div className="flex w-full justify-between ">
          <div className="w-[5rem] h-[5rem] border-2 border-[rgba(12,94,67,0.12)] rounded-full overflow-hidden mt-[-2rem]">
            <img src={person.image} alt="" className="w-full h-full object-cover" />
          </div>
          <img src={person.review} alt=""/>
        </div>
      </div>

      <h1 className='text-[1.25rem]'>{person.name}</h1>
      <p className='text-[0.93rem] leading-1.68rem'>{person.description}</p>
    </div>
  ))}
</div>


        <h1 className="text-center text-[5.625rem] font-normal text-[rgba(12,94,67,1)] mt-[11.13rem]">
          Where you can find Sayur
        </h1>
      </div>
    </section>
  );
}

export default OurProducts;
