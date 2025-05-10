'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

type ExperienceItem = {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    subTitle: 'Tech Company A',
    icon: <FaCode />,
    description: 'Mengembangkan UI responsif menggunakan React dan Tailwind.',
  },
  {
    title: 'UI/UX Designer',
    subTitle: 'Startup B',
    icon: <FaBriefcase />,
    description: 'Merancang pengalaman pengguna untuk aplikasi mobile.',
  },
  {
    title: 'Computer Science',
    subTitle: 'University C',
    icon: <FaGraduationCap />,
    description: 'Mempelajari dasar-dasar pemrograman dan struktur data.',
  },
];

export default function Experience() {
  return (
    <div className='relative py-10'>
      <div className='absolute top-0 bottom-0 left-1/2 hidden w-1 -translate-x-1/2 transform bg-gray-300 md:block' />

      <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
        {experiences.map((exp, index) => (
          <div key={index} className='md:col-span-1'>
            <div className='flex items-start gap-4 md:hidden'>
              <div className='w-10 text-center font-bold text-blue-500'>
                {index + 1}
              </div>
              <ExperienceContent data={exp} controls={null} />
            </div>

            <div className='hidden md:block'>
              <ExperienceCard index={index + 1} data={exp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  index,
  data,
}: {
  index: number;
  data: ExperienceItem;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  const isEven = index % 2 === 0;

  return (
    <div className='flex md:contents'>
      {/* Left card (even index) */}
      <div
        className={`md:col-span-1 ${!isEven ? 'hidden md:block' : ''} ${
          isEven ? 'flex md:justify-end md:pr-6' : ''
        }`}
      >
        {isEven && (
          <ExperienceContent data={data} controls={controls} ref={ref} />
        )}
      </div>

      {/* Center timeline with index */}
      <div className='relative flex flex-col items-center md:col-span-1'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-blue-500 bg-white'
        >
          {index}
        </motion.div>
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isInView ? '100%' : 0 }}
          transition={{ duration: 0.8 }}
          className='w-1 flex-1 bg-blue-300'
        />
      </div>

      {/* Right card (odd index) */}
      <div
        className={`md:col-span-1 ${isEven ? 'hidden md:block' : ''} ${
          !isEven ? 'flex md:justify-start md:pl-6' : ''
        }`}
      >
        {!isEven && (
          <ExperienceContent data={data} controls={controls} ref={ref} />
        )}
      </div>
    </div>
  );
}

const ExperienceContent = React.forwardRef(
  (
    { data, controls }: { data: ExperienceItem; controls: any },
    ref: React.Ref<HTMLDivElement>
  ) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className='w-full max-w-md rounded-2xl bg-white p-4 shadow-md'
    >
      <div className='mb-2 text-2xl text-blue-500'>{data.icon}</div>
      <h3 className='text-lg font-semibold'>{data.title}</h3>
      <h4 className='mb-2 text-sm text-gray-500'>{data.subTitle}</h4>
      <p className='text-sm text-gray-700'>{data.description}</p>
    </motion.div>
  )
);

ExperienceContent.displayName = 'ExperienceContent';
