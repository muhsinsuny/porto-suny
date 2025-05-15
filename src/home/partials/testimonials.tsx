'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { useEffect, useState, useCallback, useMemo } from 'react';

import testimonials from '../../constants/testimonials.data';

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // initial check
  }, []);

  const itemsPerPage = useMemo(() => (isMobile ? 3 : 4), [isMobile]);
  const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const next = useCallback(
    () => setPage((prev) => (prev < maxPage ? prev + 1 : 0)),
    [maxPage]
  );
  const prev = useCallback(
    () => setPage((prev) => (prev > 0 ? prev - 1 : maxPage)),
    [maxPage]
  );

  useEffect(() => {
    if (maxPage === 0) return;

    const interval = setInterval(() => {
      next();
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [next, maxPage]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const paginated = testimonials.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  console.log({ page, isMobile, itemsPerPage, maxPage });

  return (
    <section className='custom-container mt-22 px-4 py-10 md:px-28'>
      <h3 className='text-primary-200 md:text-lg-medium text-md-medium mb-2 text-center'>
        TESTIMONIALS
      </h3>
      <h2 className='md:text-display-2xl text-neutral-25 text-display-md text-center font-extrabold'>
        PEOPLE SAYS ABOUT ME
      </h2>
      <div className='mx-auto mt-2 mb-6 h-1 w-10 bg-pink-400 md:mb-16' />

      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
        {paginated.map((t, i) => (
          <div
            key={i}
            className='rounded-2xl border border-neutral-800 bg-zinc-900 p-6 md:rounded-3xl'
          >
            <div className='mb-2 flex items-center justify-between'>
              <div>
                <h4 className='text-neutral-25 text-lg font-bold md:text-xl'>
                  {t.name}
                </h4>
                <p className='text-md-text-md-regular font-medium text-neutral-400 md:text-lg'>
                  {t.role}
                </p>
              </div>
              <Image
                src={t.companyLogo}
                alt={t.company}
                width={76}
                height={32}
                style={{ maxWidth: '114px', maxHeight: '48px' }}
                className='md:max-h-48 md:max-w-114'
              />
            </div>
            <div className='gap-1.72 flex-start mb-2 flex text-orange-400'>
              {t.rating &&
                Array.from({ length: t.rating }).map((_, idx) => (
                  <Icon
                    key={idx}
                    icon='mdi:star'
                    width={14}
                    height={14}
                    className='md:h-[23px] md:w-[22px]'
                  />
                ))}
            </div>
            <p className='md:text-lg-medium text-md-medium text-neutral-25'>
              {t.message}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center gap-4'>
        <button
          onClick={prev}
          className='flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl hover:bg-zinc-800'
        >
          ←
        </button>
        <button
          onClick={next}
          className='flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl hover:bg-green-500 hover:text-black'
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
