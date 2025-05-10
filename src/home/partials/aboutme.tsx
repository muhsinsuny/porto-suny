'use client';

import Image from 'next/image';
import React from 'react';

interface AboutmeProps {
  className?: string;
}

export const AboutMe: React.FC<AboutmeProps> = () => {
  return (
    <>
      <div className='custom-container flex-center mt-20 flex w-full flex-col text-center md:relative md:mt-10 md:pt-20'>
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
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>
        </div>
      </div>
      <div className='flex-center flex flex-col pt-10 md:flex-row md:gap-10'>
        <Image
          src='/images/pro1.png'
          alt='project1'
          width={170}
          height={127}
          className='absolute top-625 left-25 md:top-[204%] md:left-[16%] md:z-0 md:h-[178px] md:w-[238px]'
        />
        <Image
          src='/images/pro2.png'
          alt='project2'
          width={134}
          height={99}
          className='absolute top-637 left-72 md:top-[210%] md:left-[71%] md:z-0 md:h-[187px] md:w-[250px] md:overflow-clip'
        />
        <Image
          src='/images/pro3.png'
          alt='project3'
          width={132}
          height={100}
          className='absolute top-663 left-55 mt-5 md:top-[245%] md:left-[61%] md:z-100 md:mt-0 md:h-[88px] md:w-[117px]'
        />
      </div>

      {/* rectangle group */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-690.5 left-0 z-30 md:absolute md:top-[270.5%] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-682 left-9 z-30 md:top-[275.5%] md:left-[2.3%] md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-673.5 left-0 z-30 md:top-[280.5%] md:block'
          alt='rectangle'
        />
      </div>
    </>
  );
};

export default AboutMe;
