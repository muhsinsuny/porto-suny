// import React from 'react';

// const Portfolio = () => {
//   return (
//     <div className='custom-container bg-base-background md:px-28'>
//       <div className='flex flex-col pt-12.5 text-center'>
//         <h3 className='text-md text-primary-200 font-medium'>PORTFOLIO</h3>
//         <h2 className='text-neutral-25 text-3xl font-extrabold'>
//           SELECTED WORK
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const portfolios = [
  {
    id: 1,
    title: 'Simple E-Commerce',
    description:
      'A streamlined and user-friendly platform designed to make your shopping experience fast, easy, and hassle-free.',
    image: '/images/image1.png',
    link: 'https://suny-store.vercel.app/',
  },
  {
    id: 2,
    title: 'Landing Page',
    description:
      'Make a bold first impression. This is where your brand meets your audience — fast, focused, and built to convert.',
    image: '/images/image2.png',
    link: 'https://kopisenja-brown.vercel.app/',
  },
  {
    id: 3,
    title: 'News Portal',
    description:
      'Stay informed with reliable, up-to-date news from trusted sources. Bringing clarity to the stories that matter most.',
    image: '/images/image3.png',
    link: 'https://salfa.sch.id/',
  },
  {
    id: 4,
    title: 'Simple E-Cashier',
    description:
      'A smart and efficient cashier system designed to simplify transactions and streamline your business operations.',
    image: '/images/image4.png',
    link: 'https://suny-cashier.vercel.app/',
  },
  {
    id: 5,
    title: 'Simple E-Coffee Shop',
    description:
      'Brewed with love, served with ease. A simple online coffee shop experience made for coffee lovers everywhere.',
    image: '/images/image5.png',
    link: 'https://latansa-coffee.vercel.app/',
  },
  {
    id: 6,
    title: 'Portfolio Landing Page',
    description:
      'Showcasing skills, passion, and creative work — all in one place. A clear snapshot of who I am and what I do.',
    image: '/images/image6.png',
    link: 'https://porto-suny.vercel.app/',
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PortfolioGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className='custom-container bg-black px-6 py-16 md:px-28'>
      <div className='mb-10 text-center'>
        <p className='text-primary-200 text-sm font-medium md:text-lg'>
          PORTFOLIO
        </p>
        <h2 className='text-4xl font-extrabold text-white'>SELECTED WORK</h2>
        <div className='mx-auto mt-2 mb-6 h-1 w-10 bg-pink-400 md:mb-16' />
      </div>

      <div ref={ref} className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {portfolios.map((item, index) => (
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
