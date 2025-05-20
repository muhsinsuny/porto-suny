'use client';

import { Icon } from '@iconify/react';
import React from 'react';

interface StickerProps {
  title?: string;
  subtitle?: string;

  icon: string;
  description?: string;
  className?: string;
}

export const Sticker: React.FC<StickerProps> = ({
  title,
  subtitle,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`bg-base-background flex h-auto w-full max-w-sm flex-col rounded-2xl border border-neutral-800 p-4 text-start shadow-md md:h-44 md:max-w-md md:rounded-3xl md:p-6 ${className} items-start`}
    >
      <h1 className='text-neutral-25 display-xs-bold mb-2 font-bold md:text-3xl'>
        {title}
      </h1>

      <div className='gap-1.72 flex-start mb-2 flex text-orange-400'>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Icon
            key={idx}
            icon={icon}
            width={24}
            height={24}
            className='md:h-8 md:w-8'
          />
        ))}
      </div>

      <p className='text-neutral-25 text-md-semibold text-start md:text-xl'>
        {subtitle}
      </p>
    </div>
  );
};
