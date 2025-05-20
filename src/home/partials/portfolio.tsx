'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import portfoliosData from '@/constants/portfolio.data';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PortfolioGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className='custom-container relative bg-black px-6 py-16 md:mt-10 md:px-24'>
      {/* rectangle */}
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-9 right-8.5 z-100 md:absolute md:-top-9 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-17 right-0 z-100 md:absolute md:-top-17 md:block'
          alt='rectangle'
        />
      </div>
      <div>
        <Image
          src='/icons/rectangle.svg'
          width={34}
          height={34}
          className='md:width-[46px] md:height-[46px] absolute top-1 right-0 z-100 md:absolute md:-top-1 md:block'
          alt='rectangle'
        />
      </div>
      <div className='mb-10 text-center'>
        <p className='text-primary-200 text-md-medium md:text-lg'>PORTFOLIO</p>
        <h2 className='md:text-display-2xl display-md-extrabold text-white'>
          SELECTED WORK
        </h2>
        <div className='mx-auto mt-2 mb-6 h-1 w-10 bg-pink-400 md:mb-16' />
      </div>

      <div ref={ref} className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {portfoliosData.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeUpVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: index * 0.15 }}
            className='flex flex-col text-white'
          >
            <div className='group relative'>
              <div className='h-[284px] w-[381px] overflow-hidden rounded-3xl'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // width={381}
                  // height={284}
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='bg-opacity-50 bg-base-background absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-75'>
                <Link
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='bg-neutral-25 hover:bg-primary-200 hover:text-2xl-bold flex h-20 w-20 items-center justify-center rounded-full border text-lg font-semibold text-black hover:cursor-pointer'>
                    VISIT
                  </span>
                </Link>
              </div>
            </div>
            <h3 className='md:displaiy-xs-bold mt-3 text-xl font-bold md:mt-4'>
              {item.title}
            </h3>
            <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400 md:mt-4'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
