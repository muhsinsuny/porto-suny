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
    <section className='custom-container md:px-28'>
      <div className='mt-16 flex-[5.3] basis-80 flex-col md:mt-10 md:flex-row md:justify-between'>
        <div className='flex w-full flex-col md:flex-row md:justify-between'>
          <div className='flex-start mt-106 flex w-100 flex-col gap-8 px-4 md:mt-20 md:w-[450px]'>
            <div className='flex flex-col justify-start gap-2 text-start md:gap-2'>
              <h3 className='text-md text-primary-200 font-medium md:text-lg'>
                SKILLS
              </h3>
              <h2 className='display-md-extrabold text-neutral-25 md:display-xl-extrabold'>
                SKILLS THAT BRING IDEAS TO LIFE
              </h2>
            </div>
            <div className='h-auto w-full p-2 md:h-auto md:w-[350px]'>
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
            </div>
          </div>

          <div className='flex-[4.7] basis-80 md:absolute md:right-[7%] md:w-1/2'>
            <SkillBars />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
