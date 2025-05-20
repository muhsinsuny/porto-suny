'use client';

// import { section } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react';

import faqs from '@/constants/faqs.data';

export const FAQSection = () => {
  return (
    <section className='custom-container py-10 md:px-24' id='faq'>
      <div className='mb-12 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium mt-2'>
          FAQ
        </p>
        <h2 className='text-display-md text-neutral-25 md:text-display-2xl inline-block border-dashed pb-2 font-bold md:font-extrabold'>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className='mx-auto mt-2 mb-6 h-1 w-10 bg-pink-400 md:mb-16' />
      </div>

      {/* first row */}
      <div className='hidden md:flex md:items-center md:justify-center'>
        <div className='custom-container hidden items-start md:flex md:flex-row md:justify-start'>
          <FaqCard faq={faqs[0]} className={'md:w-1/2'} />
          <div className='h-px w-[186px] bg-neutral-800 md:left-1/2 md:mt-20 md:-translate-y-1/2 md:-rotate-90' />
          <FaqCard faq={faqs[1]} className={'md:mb-8 md:w-1/2'} />
        </div>
      </div>
      <div className=''>
        <div className='right-1/2 left-1/2 hidden h-px w-full bg-neutral-800 px-28 md:block' />
      </div>

      {/* 2nd row */}
      <div className='hidden md:mt-10 md:flex md:items-center md:justify-center'>
        <div className='custom-container hidden items-start md:flex md:flex-row md:justify-start'>
          <FaqCard faq={faqs[2]} className={'md:w-1/2'} />
          <div className='h-px w-[186px] bg-neutral-800 md:left-1/2 md:mt-20 md:-translate-y-1/2 md:-rotate-90' />
          <FaqCard faq={faqs[3]} className={'md:mb-8 md:w-1/2'} />
        </div>
      </div>
      <div className=''>
        <div className='right-1/2 left-1/2 hidden h-px w-full bg-neutral-800 px-28 md:mt-6 md:block' />
      </div>

      {/* 3rd row */}
      <div className='hidden md:mt-10 md:flex md:items-center md:justify-center'>
        <div className='custom-container hidden items-start md:flex md:flex-row md:justify-start'>
          <FaqCard faq={faqs[4]} className={'md:w-1/2'} />
          <div className='h-px w-[186px] bg-neutral-800 md:left-1/2 md:mt-20 md:-translate-y-1/2 md:-rotate-90' />
          <FaqCard faq={faqs[5]} className={'md:mb-10 md:w-1/2'} />
        </div>
      </div>

      {/* Mobile */}
      <div className='flex flex-col gap-4 md:hidden'>
        {faqs.map((faq, index, arr) => (
          <React.Fragment key={index}>
            <FaqCard faq={faq} />
            {index < arr.length - 1 && (
              <div className='flex items-center'>
                <div className='h-px w-full bg-neutral-800' />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

export const FaqCard = ({
  faq,
  className,
}: {
  faq: any;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2${className ? ` ${className}` : ''}`}>
      <div className='flex items-baseline gap-3.5'>
        <Image
          src='/icons/star.svg'
          alt='star'
          width={23}
          height={24}
          className='text-primary-200 h-5 w-5'
        />
        <h3 className='text-neutral-25 text-lg font-bold'>{faq.question}</h3>
      </div>
      <p className='text-sm-medium mt-2 text-neutral-400'>{faq.answer}</p>
    </div>
  );
};
