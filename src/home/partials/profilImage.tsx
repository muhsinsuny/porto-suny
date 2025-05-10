import Image from 'next/image';
import React from 'react';

import { Sticker } from '@/components/ui/sticker';

interface ProfilImageProps {
  className?: string;
}
export const ProfilImage: React.FC<ProfilImageProps> = () => {
  return (
    <>
      <div>
        <div className='flex-center relative w-100'>
          <div className={'${className} flex w-100 flex-col items-center'}>
            <div className='relative'>
              <Image
                src='/images/2017-edit-crop2.png'
                alt='hero'
                style={{ objectFit: 'cover' }}
                height={881}
                width={661}
                sizes='100%'
                className='z-10 items-center rounded-lg object-cover md:-top-50'
                quality={100}
                priority={true}
                loading='eager'
              />
              <div className='to-white-200 from-primary-200 h-{850} w-{658} absolute top-0 left-1/2 z-20 h-full w-1/2 bg-gradient-to-b'></div>
              <div className='to-white-200 from-base-background absolute top-0 left-0 z-20 h-full w-1/2 bg-gradient-to-b'></div>
            </div>
            <div className='absolute top-[60%] z-30 p-4 md:absolute md:top-[57%]'>
              <Sticker
                title='5.0'
                icon='material-symbols:star-rounded'
                subtitle='Many Client Trust with me'
                className='md:left-0 md:w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilImage;
