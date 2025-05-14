// 'use client';

// import Image from 'next/image';
// import { useEffect, useState, useCallback } from 'react';

// import testimonials from '../../constants/testimonials.data';

// const Testimonials = () => {
//   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
//   const itemsPerPage = isMobile ? 3 : 4;

//   const [page, setPage] = useState(0);

//   const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1;

//   const next = useCallback(
//     () => setPage((prev) => (prev < maxPage ? prev + 1 : 0)),
//     [maxPage]
//   );
//   const prev = useCallback(
//     () => setPage((prev) => (prev > 0 ? prev - 1 : maxPage)),
//     [maxPage]
//   );

//   // Auto-scroll
//   useEffect(() => {
//     const interval = setInterval(() => {
//       next();
//     }, 5000); // Ganti halaman setiap 5 detik

//     return () => clearInterval(interval); // clear saat unmount
//   }, [page, itemsPerPage, next]);

//   // Handle resize untuk update isMobile
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       if (mobile !== isMobile) {
//         setPage(0); // reset page jika berubah layout
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMobile]);

//   const paginated = testimonials.slice(
//     page * itemsPerPage,
//     (page + 1) * itemsPerPage
//   );

//   return (
//     <section className='custom-container bg-black px-4 py-16 text-white md:px-28'>
//       <h3 className='mb-2 text-center text-green-400'>TESTIMONIALS</h3>
//       <h2 className='mb-12 text-center text-3xl font-bold md:text-4xl'>
//         PEOPLE SAYS ABOUT ME
//       </h2>

//       <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
//         {paginated.map((t, i) => (
//           <div
//             key={i}
//             className='rounded-xl border border-zinc-700 bg-zinc-900 p-6'
//           >
//             <div className='mb-2 flex items-center justify-between'>
//               <div>
//                 <h4 className='font-semibold'>{t.name}</h4>
//                 <p className='text-sm text-zinc-400'>{t.role}</p>
//               </div>
//               <Image
//                 src={t.companyLogo}
//                 alt={t.company}
//                 width={60}
//                 height={24}
//               />
//             </div>
//             <div className='mb-4 text-orange-400'>{'★'.repeat(t.rating)}</div>
//             <p className='text-sm text-zinc-300'>{t.message}</p>
//           </div>
//         ))}
//       </div>

//       <div className='mt-8 flex justify-center gap-4'>
//         <button
//           onClick={prev}
//           className='flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl hover:bg-zinc-800'
//         >
//           ←
//         </button>
//         <button
//           onClick={next}
//           className='flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl hover:bg-green-500 hover:text-black'
//         >
//           →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

'use client';

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

  // Removed duplicate declaration of itemsPerPage

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
    <section className='bg-black px-4 py-16 text-white'>
      <h3 className='mb-2 text-center text-green-400'>TESTIMONIALS</h3>
      <h2 className='mb-12 text-center text-3xl font-bold md:text-4xl'>
        PEOPLE SAYS ABOUT ME
      </h2>

      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
        {paginated.map((t, i) => (
          <div
            key={i}
            className='rounded-xl border border-zinc-700 bg-zinc-900 p-6'
          >
            <div className='mb-2 flex items-center justify-between'>
              <div>
                <h4 className='font-semibold'>{t.name}</h4>
                <p className='text-sm text-zinc-400'>{t.role}</p>
              </div>
              <Image
                src={t.companyLogo}
                alt={t.company}
                width={60}
                height={24}
              />
            </div>
            <div className='mb-4 text-orange-400'>{'★'.repeat(t.rating)}</div>
            <p className='text-sm text-zinc-300'>{t.message}</p>
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
