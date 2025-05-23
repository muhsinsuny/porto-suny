'use client';

import React from 'react';

import ServiceCards from '@/components/ui/serviceCards';

const Service = () => {
  return (
    <>
      <div className='custom-container relative mt-15 flex w-full flex-col overflow-hidden md:px-24'>
        <header className='custom-container flex h-59 w-full flex-col'>
          <div className='flex-between flex md:flex-row'>
            <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-primary-200 text-md font-medium md:text-lg'>
                  SERVICE
                </h3>
                <h1 className='md:display-2xl-extrabold text-neutral-25 display-md-extrabold w-50 md:w-100'>
                  MY SERVICE
                  <br />
                  EXPERTISE
                </h1>
              </div>
              <p className='text-md w-full font-medium text-neutral-400 md:w-1/2 md:text-right md:text-xl md:font-medium'>
                Creating modern, intuitive, and visually consistent web
                experiences that align with industry trends and user
                expectations.
              </p>
            </div>
          </div>
        </header>
        <div className='custom-container mt-16 flex flex-col gap-6 md:mt-0 md:w-full md:flex-row md:justify-between'>
          <ServiceCards
            id='01'
            title='Custom Website Development'
            description='Building responsive, fast, and scalable websites tailored to your needs.'
            icon='eva:monitor-outline'
          />
          <ServiceCards
            id='02'
            title='Web Performance Optimization'
            description='Enhancing website speed, SEO, and overall performance for better'
            icon='eva:monitor-outline'
          />
          <ServiceCards
            id='03'
            title='Website Maintenance & Debugging'
            description='Fixing bugs, improving UI, and ensuring smooth performance over time.'
            icon='eva:monitor-outline'
          />
        </div>
      </div>
    </>
  );
};

export default Service;
