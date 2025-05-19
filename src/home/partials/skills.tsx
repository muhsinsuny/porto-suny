import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marqueeIcons';
import SkillBars from '@/components/ui/skillbars';

import { trustedCompaniesData } from '@/constants/trustedCompaniesData.data';

interface skillProps {
  className?: string;
}

export const Skills: React.FC<skillProps> = () => {
  return (
    <section className='custom-container relative mt-10 flex h-full min-h-screen w-full flex-col overflow-hidden md:mt-0 md:h-fit md:items-center md:justify-center md:overflow-hidden md:px-24'>
      <div className='flex h-full w-full flex-col md:h-svh md:max-h-screen md:flex-row md:items-center md:justify-between md:gap-20'>
        <div className='flex-start flex w-100 flex-col gap-8 px-4 md:w-[500px]'>
          <div className='flex flex-col justify-start gap-2 text-start md:w-full md:gap-2'>
            <h3 className='text-md text-primary-200 font-medium md:text-lg'>
              SKILLS
            </h3>
            <h2 className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
              SKILLS THAT BRING IDEAS TO LIFE
            </h2>
          </div>
          <div className='h-auto w-full p-2 md:h-auto md:w-[450px]'>
            <Marquee className='py-4' direction='left'>
              {trustedCompaniesData.map((data) => (
                <Image
                  key={data.alt}
                  src={data.src}
                  alt={data.alt}
                  className='h-full w-auto object-contain select-none'
                  style={{
                    height: 'clamp(2.13rem, 3.97vw, 3rem)',
                  }}
                />
              ))}
            </Marquee>
            <Marquee className='py-4' direction='right'>
              {trustedCompaniesData.map((data) => (
                <Image
                  key={data.alt}
                  src={data.src}
                  alt={data.alt}
                  className='h-full w-auto object-contain select-none'
                  style={{
                    height: 'clamp(2.13rem, 3.97vw, 3rem)',
                  }}
                />
              ))}
            </Marquee>
          </div>
        </div>

        <div className='mt-6 md:relative md:right-0 md:w-[450px] md:max-w-screen-2xl'>
          <SkillBars />
        </div>
      </div>
    </section>
  );
};

export default Skills;
