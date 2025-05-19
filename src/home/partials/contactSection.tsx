import Image from 'next/image';
import React from 'react';

import ContactForm from './contactForm';

function ContactSection() {
  return (
    <div className='custom-container relative mt-8 flex flex-col py-10 md:flex-row md:px-28'>
      {/* horizontal line */}
      <div className='absolute bottom-0 left-0 hidden w-full overflow-hidden border-t border-neutral-800 md:absolute md:top-0 md:z-50 md:block md:overflow-hidden md:px-32'></div>

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
            'relative flex w-full flex-col items-center justify-center overflow-hidden md:top-0 md:w-1/2 md:justify-end md:gap-0'
          }
        >
          <div className='relative z-10 flex flex-col items-center justify-center'>
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

            <div className='from-white-950 to-base-background absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-b md:absolute md:top-0 md:right-1/2 md:z-10 md:w-1/2'></div>

            {/* Social Media */}
            <div className='flex-center absolute top-75 z-30 flex flex-row gap-4'>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800'>
                <Image
                  src='/icons/icon-web.svg'
                  width={20}
                  height={20}
                  alt='website'
                />
              </div>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800'>
                <Image
                  src='/icons/icon-ig.svg'
                  width={20}
                  height={20}
                  alt='instagram'
                />
              </div>
              <div className='flex-center flex h-12 w-12 rounded-full border-1 border-neutral-800'>
                <Image
                  src='/icons/icon-link.svg'
                  width={20}
                  height={20}
                  alt='linkedin'
                />
              </div>
            </div>
            <h3 className='text-md-bold absolute top-91 z-30 text-neutral-200'>
              Muhsin Suny M.
            </h3>
            <div className='flex-center absolute top-97 z-30 flex flex-row gap-3'>
              <div className='border-primary-200 bg-primary-200 top-97 z-30 h-4 w-4 rounded-full border-1' />
              <h3 className='text-sm-semibold top-97 z-30 text-neutral-400'>
                Avaiable for Work
              </h3>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='md:w-1/2'>
          <ContactForm />
        </div>
      </div>

      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-272 right-17 z-50 md:absolute md:top-149 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-264 right-8.5 z-50 md:absolute md:top-141 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-272 right-0 z-50 md:absolute md:top-149 md:block'
          alt='rectangle'
        />
      </div>

      {/* horizontal line */}
      <div className='absolute top-280 bottom-0 left-0 w-full overflow-hidden border-t border-neutral-800 md:absolute md:top-230 md:z-35 md:overflow-hidden md:px-32'></div>
    </div>
  );
}

export default ContactSection;
