'use client';
import React from 'react'

function CommercialOfferForm() {
  return (
    <div className="w-[481px] h-[697px] bg-[#0C5B35] rounded-[26px] p-6 pt-12 flex flex-col  justify-between z-20">
      <form className="flex flex-col gap-[1.875rem]">
        <input 
          type="text" 
          placeholder="Name surname *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none" 
        />
        <input 
          type="text" 
          placeholder="Position *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none" 
        />
        <input 
          type="text" 
          placeholder="Name of your store *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none" 
        />
        <input 
          type="tel" 
          placeholder="Tel. *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none" 
        />
        <input 
          type="email" 
          placeholder="E-mail *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none" 
        />
        <textarea 
          placeholder="Messages *" 
          className="w-full p-3 rounded-md border border-gray-300 outline-none resize-none h-[9.93rem]"
        />
      </form>

      <button className=" bg-[#FFD93D] text-[#0C5B35] font-normal text-[1.875rem] py-3 mt-[2.5rem] rounded-full hover:bg-yellow-400 transition-all">
        Get a commercial offer
      </button>
    </div>
  )
}

export default CommercialOfferForm
