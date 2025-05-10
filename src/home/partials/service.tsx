import React from 'react';

import ServiceCards from '@/components/ui/serviceCards';

export const Service = () => {
  return (
    <>
      <header className='custom-container mt-130 flex h-59 w-full flex-col md:mt-50 md:px-32'>
        <div className='flex-between flex md:flex-row'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center'>
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
            <p className='text-md w-full font-medium text-neutral-400 md:text-right md:text-xl md:font-medium'>
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </p>
          </div>
        </div>
      </header>
      <div className='custom-container mt-6 flex flex-col gap-6 md:mt-0 md:w-full md:flex-row md:justify-between md:gap-10 md:px-32'>
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
    </>
  );
};

export default Service;
