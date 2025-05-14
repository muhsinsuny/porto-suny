import { Icon } from '@iconify/react';
import React from 'react';

interface ServiceCardsProps {
  children?: React.ReactNode;
  className?: string;
  id: string | number;
  title: string;
  description: string;
  icon: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
  id,
  title,
  description,
  icon,
}) => {
  return (
    <>
      <div className='flex flex-col items-start justify-start gap-3'>
        <div className='flex w-full flex-col gap-3'>
          <div className='text-md-semibold text-neutral-400'>{id}</div>
          {/* Garis horizontal */}
          <hr className='border-1px border-neutral-800' />
        </div>

        <div className='text-primary-200'>
          <Icon icon={icon} width={27} height={24} className='md:h-8 md:w-8' />
        </div>

        <h1 className='text-xl-semibold text-neutral-25 md:max-w-70'>
          {title}
        </h1>
        <p className='text-md-regular text-neutral-400 md:max-w-70'>
          {description}
        </p>
      </div>
    </>
  );
};

export default ServiceCards;
