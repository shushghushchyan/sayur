'use client';
import React from 'react';
import './globals.css';

const Header: React.FC = () => {

  return (
    <header className="flex items-center justify-around bg-[rgba(12,94,67,1)] h-[4.25rem] w-full ">
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
          <li><a href="#our-products">Our Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#get-in-touch">Get in touch</a></li>
          <li><a href="#find-sayur">Find Sayur</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
      <div className="flex gap-[1.4894rem] sm:gap-[1.0625rem] text-white text-sm font-medium">
        <h1 className="text-[0.8125rem] font-normal underline text-white getintouch">
          <a href="#get-in-touch">Get in touch</a>
        </h1>
        <img className="burger-menu hidden" src="/assets/burger.svg" alt="burger menu" />
      </div>
      <div className="bg-[rgba(255,214,85,1)] w-0 h-[0.31rem] absolute bottom-0 z-1"></div>
    </header>
  );
};

export default Header;
