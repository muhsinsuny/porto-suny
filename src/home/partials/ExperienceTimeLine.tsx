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

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className='custom-container mt-20 w-full px-4 md:px-24'
      ref={containerRef}
    >
      <h2 className='text-primary-200 mb-2 text-center text-sm md:text-lg'>
        EXPERIENCE
      </h2>
      <h1 className='md:text-display-2xl text-display-md text-neutral-25 text-center font-extrabold'>
        PROFESIONAL WORK
      </h1>
      <div className='mx-auto mt-2 mb-12 h-1 w-10 bg-pink-400' />

      <div className='md:flex-center relative mx-auto'>
        {/* Animated Vertical Line */}
        <motion.div
          style={{ scaleY }}
          className='bg-primary-200 absolute top-[12%] bottom-[10%] left-5.5 z-0 w-1 origin-top md:top-[15%] md:bottom-[10%] md:left-1/2 md:block md:items-center md:justify-center'
        />

        <div className='flex flex-col gap-4 md:items-center md:justify-center md:gap-0'>
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
      className='relative flex flex-col gap-2 md:grid md:[grid-template-columns:1fr_0.5fr_1fr] md:items-start'
    >
      {/* Left Card */}
      <div className='hidden md:flex md:justify-end'>
        {isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Middle ID */}
      <div className='relative z-10 hidden md:block md:text-center'>
        <div className='bg-primary-200 md:text-md-bold flex h-10 w-10 rounded-full font-bold text-black md:absolute md:top-35 md:left-1/2 md:block md:-translate-x-1/2 md:p-1'>
          {exp.id}
        </div>
      </div>

      {/* Right Card */}
      <div className='hidden md:flex md:justify-start'>
        {!isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Mobile view: 1 row horizontal */}
      <div className='flex md:hidden'>
        <div className='flex flex-row items-start'>
          <div className='bg-primary-200 absolute top-1/2 left-1 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full font-bold text-black'>
            {exp.id}
          </div>
          <div className='mt-2 mb-2 ml-17'>
            <ExperienceCard exp={exp} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp }: { exp: any }) {
  return (
    <div className='bg-base-background mt-2 w-full rounded-3xl border border-neutral-800 p-5 md:mt-4 md:h-full md:w-full md:rounded-3xl'>
      <div className='mb-2 md:flex md:flex-row md:items-start md:justify-between'>
        <div className='flex flex-col'>
          <div className='text-sm-reguler text-neutral-400 md:text-lg'>
            {exp.year}
          </div>
          <h3 className='text-md text-neutral-25 item-center md:display-xs-bold mt-1 mb-2 flex space-x-2 font-bold md:mb-4'>
            {exp.title}
          </h3>
        </div>
        <Image src={exp.logo} alt={exp.company} width={76} height={32} />
      </div>
      <p className='text-sm text-neutral-400'>{exp.description}</p>
    </div>
  );
}
