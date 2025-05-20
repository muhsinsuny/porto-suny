'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ContactForm from './contactForm';

function ContactSection() {
  return (
    <div
      className='custom-container relative mt-8 flex flex-col py-10 md:h-[750] md:flex-row md:px-24'
      id='contact'
    >
      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-5 left-0 z-50 md:absolute md:top-0 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-13 left-8.5 z-50 md:absolute md:top-8 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-5 left-17 z-50 md:absolute md:top-0 md:block'
          alt='rectangle'
        />
      </div>

      {/* Profil Image */}
      <div className='md:flex md:flex-row md:items-center'>
        <div
          className={
            'relative flex w-full flex-col items-center justify-center overflow-hidden md:top-0 md:w-full md:justify-between md:gap-0'
          }
        >
          <div className='z-10 flex flex-col items-center justify-center md:h-screen'>
            <Image
              src='/images/suny1-transparant.png'
              alt='hero'
              height={400}
              width={392}
              sizes='100%'
              className='items-center rounded-lg object-contain'
              quality={100}
              priority={true}
              loading='eager'
            />

            <div className='from-white-950 to-base-background absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-b md:absolute md:top-0 md:right-1/2 md:z-10 md:w-full'></div>

            {/* Social Media */}
            <div className='flex-center absolute top-75 z-50 flex flex-row gap-4 md:top-[550] md:block'>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800 hover:cursor-pointer'>
                <Link
                  href='https://github.com/muhsinsuny'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/icons/github-mark-white.png'
                    width={20}
                    height={20}
                    alt='website'
                  />
                </Link>
              </div>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800 hover:cursor-pointer md:hover:cursor-pointer'>
                <Link
                  href='https://www.instagram.com/suny_saja/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:cursor-pointer'
                >
                  <Image
                    src='/icons/icon-ig.svg'
                    width={20}
                    height={20}
                    alt='instagram'
                  />
                </Link>
              </div>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800 hover:cursor-pointer'>
                <Link
                  href='https://www.linkedin.com/in/muhsin-suny-m-687770348/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/icons/icon-link.svg'
                    width={20}
                    height={20}
                    alt='linkedin'
                  />
                </Link>
              </div>
            </div>
            <h3 className='text-md-bold absolute top-91 z-30 text-neutral-200 md:top-[620]'>
              Muhsin Suny M.
            </h3>
            <div className='flex-center absolute top-97 z-30 flex flex-row gap-3 md:top-[640]'>
              <div className='border-primary-200 bg-primary-200 top-97 z-30 h-4 w-4 rounded-full border-1' />
              <h3 className='text-sm-semibold top-97 z-30 text-neutral-400'>
                Avaiable for Work
              </h3>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='md:w-full'>
          <ContactForm />
        </div>
      </div>

      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-272 right-17 z-50 md:absolute md:top-[730] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-264 right-8.5 z-50 md:absolute md:top-[697] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-272 right-0 z-50 md:absolute md:top-[730] md:block'
          alt='rectangle'
        />
      </div>

      {/* top horizontal line */}
      <div className='absolute hidden w-full overflow-hidden md:top-0 md:left-0 md:z-50 md:block md:overflow-hidden md:border-t md:border-neutral-800 md:px-24'></div>
      {/* bottom horizontal line */}
      <div className='absolute top-280 w-full overflow-hidden border-t border-neutral-800 md:absolute md:top-[765] md:left-0 md:z-35 md:block md:overflow-hidden md:px-24'></div>
    </div>
  );
}

export default ContactSection;
