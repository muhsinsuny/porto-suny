// components/FloatingWhatsApp.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = '6281919872015';
  const defaultMessage = 'Halo! Saya tertarik dengan portofolio Anda.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className='custom-container relative bottom-25 left-0 z-50 flex w-fit -translate-x-33 items-center justify-start space-x-2 overflow-hidden md:bottom-26 md:-left-1/2 md:translate-x-35 md:px-24'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <span className='not-odd:animate-fade-in hidden rounded-lg bg-green-600 px-3 py-1 text-white shadow-lg md:block'>
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
  );
}
