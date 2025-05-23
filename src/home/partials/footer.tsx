'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = '6281919872015';
  const defaultMessage = 'Halo! Saya tertarik dengan portofolio Anda.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      <div className='custom-container flex h-25 w-full flex-row items-center justify-between py-6 md:px-24'>
        <div
          className='flex w-fit flex-row items-center space-x-2'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <span className='odd:animate-fade-out hidden rounded-lg bg-green-600 px-3 py-1 text-white shadow-lg md:block'>
              Chat via WhatsApp
            </span>
          )}
          <a
            href={whatsappLink}
            target='_blank'
            rel='noopener noreferrer'
            className='transform rounded-full bg-green-500 p-2 text-white shadow-lg transition hover:scale-130 hover:bg-green-600 md:block'
          >
            <Image
              src='https://img.icons8.com/color/48/000000/whatsapp--v1.png'
              alt='WhatsApp Icon'
              width={21}
              height={21}
            />
          </a>
        </div>
        <h3 className='text-xs-regular h-10 text-neutral-400'>
          @ 2025 Muhsin Suny M. All rights reserved.
        </h3>
        <a
          href='#hero'
          className='hover:bg-primary-200 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 transition'
        >
          <FaArrowUp />
        </a>
      </div>
    </>
  );
}

export default Footer;
