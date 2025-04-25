'use client';
import React from 'react';
import './globals.css';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-around bg-[rgba(12,94,67,1)] h-[4.25rem] w-full">
      <img
        src="/assets/instantCoffee.svg"
        alt="Sayur Magic Logo"
        className="instant-coffee w-[14.69rem] h-[2.6875rem] lg:hidden md:block sm:block"
      />
      <img
        src="/assets/logo.svg"
        alt="Sayur Magic Logo"
        className="w-[8.4375rem] hidden lg:block logo"
      />
      <div className="max-w-[53.1875rem] ulDiv">
        <ul className="flex justify-between gap-[2.1875rem] items-center text-white text-[1.1875rem] font-semibold">
          <li>Our Products</li>
          <li>About</li>
          <li>Get in touch</li>
          <li>Find Sayur</li>
          <li>Reviews</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="flex gap-[1.4894rem] sm:gap-[1.0625rem] text-white text-sm font-medium">
        <h1 className="text-[0.8125rem] font-normal underline text-white getintouch">Get in touch</h1>
        <img className="burger-menu hidden" src="/assets/burger.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
