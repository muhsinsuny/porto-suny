// components/ExperienceTimeline.tsx
'use client';

import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    year: '2020 – 2022',
    title: 'Frontend Developer',
    company: 'Upwork',
    logo: '/icons/icon-upwork.svg',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks...',
  },
  {
    id: 2,
    year: '2020 – 2022',
    title: 'Frontend Developer',
    company: 'Trello',
    logo: '/icons/icon-trello.svg',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces...',
  },
  {
    id: 3,
    year: '2020 – 2022',
    title: 'Frontend Developer',
    company: 'Zoom',
    logo: '/icons/icon-zoom.svg',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces...',
  },
  {
    id: 4,
    year: '2020 – 2022',
    title: 'Frontend Developer',
    company: 'Zapier',
    logo: '/icons/icon-zapier.svg',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces...',
  },
];

// export default function ExperienceTimeline() {
//   return (
//     <section className='bg-black px-4 py-20 text-white'>
//       <h2 className='mb-2 text-center text-sm text-green-500'>EXPERIENCE</h2>
//       <h1 className='mb-12 text-center text-3xl font-bold'>PROFESIONAL WORK</h1>
//       <div className='relative mx-auto max-w-4xl'>
//         <div className='absolute left-1/2 h-full -translate-x-1/2 transform border-l border-gray-700'></div>

//         {experiences.map((exp, idx) => (
//           <ExperienceCard key={exp.id} exp={exp} isLeft={idx % 2 === 0} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function ExperienceCard({ exp, isLeft }: any) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) controls.start('visible');
//   }, [controls, inView]);

//   const variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial='hidden'
//       animate={controls}
//       variants={variants}
//       className={`mb-12 flex flex-col md:flex-row ${
//         isLeft ? 'md:flex-row-reverse' : ''
//       } relative items-center justify-between`}
//     >
//       <div className='w-full rounded-md border border-gray-700 bg-[#0F0F0F] p-6 md:w-[45%]'>
//         <div className='text-sm text-gray-400'>{exp.year}</div>
//         <div className='mb-2 flex items-center space-x-2'>
//           <h3 className='text-xl font-semibold'>{exp.title}</h3>
//         </div>
//         <Image src={exp.logo} alt={exp.company} width={76} height={32} />
//         <p className='text-sm text-gray-300'>{exp.description}</p>
//       </div>

//       <div className='hidden w-[10%] flex-col items-center md:flex'>
//         <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-black'>
//           {exp.id}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function ExperienceTimeline() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   });

//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section className='bg-black px-4 py-20 text-white' ref={containerRef}>
//       <h2 className='mb-2 text-center text-sm text-green-500'>EXPERIENCE</h2>
//       <h1 className='mb-12 text-center text-3xl font-bold'>PROFESIONAL WORK</h1>

//       <div className='relative mx-auto max-w-2xl'>
//         {/* Animated Vertical Line (Mobile) */}
//         <motion.div
//           style={{ scaleY }}
//           className='absolute top-4 bottom-4 left-4 z-0 w-1 origin-top bg-green-500 md:hidden'
//         />

//         <div className='flex flex-col gap-12'>
//           {experiences.map((exp) => (
//             <MobileCard key={exp.id} exp={exp} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function MobileCard({ exp }: { exp: any }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) controls.start('visible');
//   }, [controls, inView]);

//   const variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial='hidden'
//       animate={controls}
//       variants={variants}
//       className='relative flex items-start md:hidden'
//     >
//       {/* Left: ID Circle */}
//       <div className='relative z-10'>
//         <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-black'>
//           {exp.id}
//         </div>
//       </div>

//       {/* Right: Card */}
//       <div className='ml-6 w-full rounded-md border border-gray-700 bg-[#0F0F0F] p-5'>
//         <div className='text-sm text-gray-400'>{exp.year}</div>
//         <div className='mb-2 flex items-center space-x-2'>
//           <h3 className='text-lg font-semibold'>{exp.title}</h3>
//           <Image src={exp.logo} alt={exp.company} width={20} height={20} />
//         </div>
//         <p className='text-sm text-gray-300'>{exp.description}</p>
//       </div>
//     </motion.div>
//   );
// }

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className='custom-container bg-black px-4 py-20 text-white md:px-32'
      ref={containerRef}
    >
      <h2 className='mb-2 text-center text-sm text-green-500'>EXPERIENCE</h2>
      <h1 className='mb-12 text-center text-3xl font-bold'>PROFESIONAL WORK</h1>

      <div className='md:flex-center relative mx-auto max-w-6xl'>
        {/* Animated Vertical Line */}
        <motion.div
          style={{ scaleY }}
          className='absolute top-[12%] bottom-[10%] left-5.5 z-0 w-1 origin-top bg-green-500 md:top-[15%] md:bottom-[10%] md:left-1/2 md:block md:items-center md:justify-center'
        />

        <div className='flex flex-col gap-16 md:gap-0'>
          {experiences.map((exp) => (
            <TimelineItem key={exp.id} exp={exp} isLeft={exp.id % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, isLeft }: { exp: any; isLeft: boolean }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      className='relative flex flex-col md:grid md:grid-cols-3 md:items-start'
    >
      {/* Left Card */}
      <div className='hidden md:block'>
        {isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Middle ID */}
      <div className='relative z-10 hidden justify-center md:block'>
        <div className='absolute top-1/2 left-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-black md:top-40 md:left-37.5'>
          {exp.id}
        </div>
      </div>

      {/* Right Card */}
      <div className='hidden md:block'>
        {!isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Mobile view: 1 row horizontal */}
      <div className='flex md:hidden'>
        <div className='flex flex-row items-start'>
          <div className='absolute top-1/2 left-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-black'>
            {exp.id}
          </div>
          <div className='ml-17'>
            <ExperienceCard exp={exp} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp }: { exp: any }) {
  return (
    <div className='bg-base-background mt-6 w-full rounded-2xl border border-neutral-800 p-5 md:mt-16 md:w-full md:rounded-3xl'>
      <div className='mb-4 md:flex md:flex-row'>
        <div className='flex flex-col'>
          <div className='text-sm-reguler font-medium text-neutral-400 md:text-lg'>
            {exp.year}
          </div>
          <h3 className='text-md text-neutral-25 item-center md:display-xs-bold mt-1 mb-2 flex space-x-2 font-bold md:mb-4'>
            {exp.title}
          </h3>
        </div>
        <Image src={exp.logo} alt={exp.company} width={76} height={32} />
      </div>
      <p className='text-sm text-gray-300'>{exp.description}</p>
    </div>
  );
}
