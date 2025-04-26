import React from 'react';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className='flex max-w-202 items-center justify-start p-4'>
      <div className='flex-col items-center justify-start gap-4'>
        <div className='flex items-center space-x-2'>
          <div className='1px border-rgba(253, 253, 253, 1) w-28.5 border'></div>
          <div className='text-neutral-25 text-xl font-medium'>
            Hi, I am Muhsin Suny M Frontend Developer
          </div>
        </div>
        <div className='flex-col'>
          <div className='text-7xl font-bold text-neutral-200'>
            BUILDING FAST &{' '}
            <span className='text-primary-200'>INTERACTIVE</span> WEB
            EXPERIENCES.
          </div>
          <div className='mt-4 max-w-150 text-xl font-medium text-neutral-400'>
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </div>
        </div>
        <Button className='text-md bg-primary-200 mt-14 h-14 w-75 p-2 px-8 py-4 font-bold text-neutral-950'>
          HIRE ME
        </Button>
      </div>
    </section>
  );
};
