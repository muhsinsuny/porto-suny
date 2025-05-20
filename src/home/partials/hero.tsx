'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Sticker } from '@/components/ui/sticker';

export const Hero = () => {
  return (
    <section
      className='custom-container flex-between flex w-full flex-wrap items-center overflow-hidden md:relative md:z-80 md:h-screen md:items-center md:px-24'
      id='hero'
    >
      <div className='z-80 flex flex-col items-center justify-center gap-10 md:z-10 md:flex-row'>
        <div className='mt-30 max-w-175 flex-col items-center justify-start gap-4 md:z-80 md:h-[700]'>
          <div className='flex items-center space-x-2'>
            <div className='1px border-rgba(253, 253, 253, 1) w-5.25 border md:w-28.5'></div>
            <div className='text-neutral-25 text-md font-medium md:text-xl'>
              Hi, I am Muhsinsuny, Frontend Developer
            </div>
          </div>
          <div className='flex-col overflow-auto md:mt-4'>
            <h1 className='font-weight-extrabold text-display-lg md:text-display-3xl font-bold text-neutral-200'>
              BUILDING FAST &{' '}
              <span className='text-primary-200'>INTERACTIVE</span> WEB
              EXPERIENCES.
            </h1>
            <p className='mt-4 max-w-150 text-lg font-medium text-neutral-400 md:z-80 md:mt-4 md:text-xl'>
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </p>
            <Button
              asChild
              className='md:text-md-bold bg-primary-200 hover:bg-primary-300 text-sm-bold mt-14 h-14 w-full p-2 px-8 py-4 font-bold text-neutral-950 hover:cursor-pointer md:z-100 md:mt-15 md:w-75'
            >
              <Link href='#contact'>HIRE ME</Link>
            </Button>
          </div>
        </div>

        {/* Profil Image */}
        <div
          className={
            'relative top-[75.5%] z-10 flex w-full flex-col items-center justify-center overflow-hidden md:absolute md:top-0 md:right-0 md:z-10 md:h-[881] md:w-1/2 md:items-end md:justify-end md:gap-0'
          }
        >
          <div className='md:right-0 md:-z-10'>
            <Image
              src='/images/suny1-transparant.png'
              alt='hero'
              height={400}
              width={392}
              sizes='100%'
              className='z-10 items-center rounded-lg object-contain md:right-0 md:z-10 md:h-[700] md:w-full md:-translate-y-40'
              quality={100}
              priority={true}
              loading='eager'
            />
            <div className='to-primary-75 from-primary-300 pointer-events-none absolute top-0 left-1/2 z-20 h-full w-2/3 overflow-hidden bg-gradient-to-b md:absolute md:top-0 md:right-1/2 md:z-10 md:h-[700] md:w-1/2'></div>
            <div className='from-base-background to-white-950 pointer-events-none absolute top-0 left-0 z-20 ml-2 h-full w-1/2 bg-gradient-to-b md:absolute md:top-0 md:right-1/2 md:z-10 md:h-[700] md:w-1/2'></div>
          </div>

          {/* Stiker */}
          <div className='flex-center absolute top-74 z-40 w-full md:absolute md:top-1/2 md:left-1/2 md:w-fit md:-translate-x-1/2 md:translate-y-13'>
            <Sticker
              title='5.0'
              icon='material-symbols:star-rounded'
              subtitle='Many Client Trust with me'
            />
          </div>
        </div>
      </div>

      {/* vertical line left mobile and right desktop*/}
      <div className='absolute -top-10 left-1/2 -z-10 h-142 -translate-x-1/2 transform border-l border-neutral-800 md:absolute md:-top-10 md:left-[50%] md:-z-10 md:h-183 md:-translate-x-3/4 md:transform'></div>
      {/* vertical line right mobile and left desktop*/}
      <div className='absolute top-20 left-3/4 -z-10 h-110 -translate-x-1/2 transform border-l border-neutral-800 md:absolute md:-top-10 md:left-[25%] md:-z-10 md:h-183 md:transform'></div>

      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-180 left-0 z-100 md:absolute md:top-164.5 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-172 left-8.5 z-100 md:absolute md:top-156.5 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-180 left-17 z-100 md:absolute md:top-164.5 md:block'
          alt='rectangle'
        />
      </div>

      {/* horizontal line nav */}
      <div className='pointer-events-none absolute top-20 bottom-0 left-0 w-full overflow-hidden border-t border-neutral-800 md:absolute md:top-20 md:z-35 md:overflow-hidden md:px-0'></div>
      {/* horizontal line bottom hero */}
      <div className='pointer-events-none absolute top-130 left-0 -z-10 w-full border-t border-neutral-800 md:absolute md:top-173 md:z-35'></div>
    </section>
  );
};
