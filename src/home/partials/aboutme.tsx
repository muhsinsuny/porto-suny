'use client';

import Image from 'next/image';
import React from 'react';

interface AboutmeProps {
  className?: string;
}

export const AboutMe: React.FC<AboutmeProps> = () => {
  return (
    <>
      <div
        className='custom-container md:flex-center relative mb-0 flex h-[693px] w-full flex-col items-center pt-10 md:relative md:mt-30 md:mb-0 md:flex md:h-[631px] md:flex-col md:pt-30'
        id='about'
      >
        <div className='flex-center flex w-full flex-col text-center md:relative'>
          <div className='flex flex-col text-center'>
            <h3 className='text-primary-200 text-md font-medium md:text-lg'>
              ABOUT ME
            </h3>
            <h1 className='text-neutral-25 display-md-extrabold md:display-2xl-extrabold mt-4 flex w-105 justify-center md:z-100 md:w-200'>
              CRAFTING SEAMLESS
            </h1>
            <h1 className='display-md-extrabold md:display-2xl-extrabold w-105 items-center justify-center md:z-100 md:w-200'>
              <span className='text-primary-200'>HIGH-PERFORMANCE WEB</span>{' '}
              EXPERIENCES
            </h1>
            <p className='text-md mt-4 w-full px-4 font-medium text-neutral-400 md:mt-16 md:max-w-200'>
              I love turning designs into interactive, high-performance
              websites. With a keen eye for detail and a deep understanding of
              frontend technologies, I create smooth and visually appealing user
              experiences.
            </p>
          </div>
        </div>

        <Image
          src='/images/pro1.png'
          alt='project1'
          width={170}
          height={127}
          className='absolute top-105 left-17 h-[127px] w-[170px] md:top-32 md:left-[11.5%] md:z-0 md:h-[178px] md:w-[238px] md:-translate-y-[50%]'
        />
        <Image
          src='/images/pro2.png'
          alt='project2'
          width={134}
          height={99}
          className='absolute top-117 left-62 h-[99] w-[134] md:absolute md:top-22 md:left-[73.5%] md:z-0 md:h-[187px] md:w-[250px]'
        />
        <Image
          src='/images/pro3.png'
          alt='project3'
          width={132}
          height={100}
          className='absolute top-140 left-1/2 mt-5 h-[100px] w-[132px] -translate-x-1/2 md:absolute md:top-75 md:left-1/2 md:z-100 md:mt-0 md:h-[88px] md:w-[117px] md:translate-x-39'
        />

        {/* rectangle group */}

        <div>
          <Image
            src='/icons/rectangle.svg'
            width={34}
            height={34}
            className='md:width-[46px] md:height-[46px] absolute top-163 left-0 z-30 md:absolute md:top-143 md:block'
            alt='rectangle'
          />
        </div>
        <div>
          <Image
            src='/icons/rectangle.svg'
            width={34}
            height={34}
            className='md:width-[46px] md:height-[46px] absolute top-155 left-8 z-30 md:top-135 md:left-[2.7%] md:block'
            alt='rectangle'
          />
        </div>
        <div>
          <Image
            src='/icons/rectangle.svg'
            width={34}
            height={34}
            className='md:width-[46px] md:height-[46px] absolute top-147 left-0 z-30 md:top-127 md:block'
            alt='rectangle'
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
