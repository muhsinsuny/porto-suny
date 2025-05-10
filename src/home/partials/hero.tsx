'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Sticker } from '@/components/ui/sticker';

// import { ProfilImage } from './profilImage';

export const Hero = () => {
  return (
    <section
      className='custom-container flex-between flex flex-wrap items-center overflow-hidden md:relative md:z-80 md:min-h-screen md:px-32'
      id='hero'
    >
      <div className='z-80 flex flex-col items-center justify-center gap-10 md:z-10 md:flex-row md:place-items-start md:justify-start'>
        <div className='mt-10 max-w-175 flex-[5.3] basis-80 flex-col items-center justify-start gap-4 md:z-80 md:mt-25.25'>
          <div className='flex items-center space-x-2'>
            <div className='1px border-rgba(253, 253, 253, 1) w-5.25 border md:w-28.5'></div>
            <div className='text-neutral-25 text-md font-medium md:text-xl'>
              Hi, I am Muhsinsuny, Frontend Developer
            </div>
          </div>
          <div className='flex-col overflow-auto'>
            <h1 className='font-weight-extrabold text-display-lg font-bold text-neutral-200 md:text-5xl'>
              BUILDING FAST &{' '}
              <span className='text-primary-200'>INTERACTIVE</span> WEB
              EXPERIENCES.
            </h1>
            <p className='mt-4 max-w-150 text-lg font-medium text-neutral-400 md:z-80 md:text-xl'>
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </p>
            <Button
              asChild
              className='text-md bg-primary-200 hover:bg-primary-300 mt-14 h-14 w-full p-2 px-8 py-4 font-bold text-neutral-950 md:mt-20 md:w-75'
            >
              <Link href='#'>HIRE ME</Link>
            </Button>
          </div>
        </div>

        {/* Profil Image */}
        <div
          className={
            'absolute top-139 flex w-full flex-col items-center justify-center md:absolute md:-top-30 md:right-0 md:z-10 md:w-1/2 md:items-end md:justify-end md:gap-0'
          }
        >
          <div className='md:right-0 md:-z-10'>
            <Image
              src='/images/suny1-transparant.png'
              alt='hero'
              height={400}
              width={392}
              sizes='100%'
              className='items-center rounded-lg object-contain md:top-0 md:right-0 md:z-10 md:h-[981px] md:w-[661px] md:rounded-2xl'
              quality={100}
              priority={true}
              loading='eager'
            />
            <div className='to-primary-75 from-primary-300 absolute top-0 left-1/2 h-full w-2/3 overflow-hidden bg-gradient-to-b md:absolute md:top-0 md:left-1/2 md:z-10 md:w-1/2'></div>
            <div className='from-base-background to-white-950 absolute top-0 right-1/2 h-full w-full bg-gradient-to-b md:absolute md:top-0 md:right-1/2 md:z-10 md:w-1/2'></div>
            <div className='from-base-background md:bsolute to-white-5 absolute top-90 h-50 w-full bg-gradient-to-t md:top-105 md:z-10 md:h-[460px] md:w-[661px] md:justify-end'></div>
          </div>

          {/* Stiker */}
          <div className='flex-center absolute top-90 z-40 w-full md:absolute md:top-[43%] md:bottom-0 md:left-[33%] md:w-fit'>
            <Sticker
              title='5.0'
              icon='material-symbols:star-rounded'
              subtitle='Many Client Trust with me'
            />
          </div>
        </div>
      </div>

      {/* vertical line left mobile and right desktop*/}
      <div className='absolute -top-[9%] left-1/2 -z-10 h-155.75 -translate-x-1/2 transform border-l border-neutral-800 md:absolute md:-top-[10%] md:left-[50%] md:-z-10 md:h-300 md:-translate-x-3/4 md:transform'></div>
      {/* vertical line right mobile and left desktop*/}
      <div className='absolute top-[10%] left-3/4 -z-10 h-120 -translate-x-1/2 transform border-l border-neutral-800 md:absolute md:-top-[10%] md:left-[25%] md:-z-10 md:h-800 md:transform'></div>

      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-[105%] left-0 z-30 md:absolute md:top-[480] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-[100%] left-8.5 z-30 md:absolute md:top-[100%] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-[105%] left-17 z-30 md:absolute md:top-[94.7%] md:block'
          alt='rectangle'
        />
      </div>

      {/* horizontal line nav */}
      <div className='absolute top-[10%] bottom-0 left-0 w-full overflow-hidden border-t border-neutral-800 md:absolute md:top-20 md:z-35 md:overflow-hidden md:px-32'></div>
      {/* horizontal line bottom hero */}
      <div className='absolute top-[75%] left-0 -z-10 w-full border-t border-neutral-800 md:absolute md:top-[99.5%] md:z-35'></div>
    </section>
  );
};
