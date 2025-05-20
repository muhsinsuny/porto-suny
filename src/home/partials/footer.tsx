'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <div className='custom-container flex-between relative flex flex-row text-center md:mt-10 md:items-center md:justify-center md:px-24'>
      <a
        href='#hero'
        className='hover:bg-primary-200 absolute -top-15 left-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 transition md:-top-16'
      >
        <FaArrowUp />
      </a>
      <h3 className='text-xs-regular h-10 w-full text-neutral-400'>
        @ 2025 Muhsin Suny M. All rights reserved.
      </h3>
    </div>
  );
}

export default Footer;
