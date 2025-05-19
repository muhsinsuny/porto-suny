import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container w-full py-10 md:px-28 md:py-20' id={id}>
      {/* heading */}
      <div className='text-left'>
        <h3 className='text-md-medium md:text-lg-medium text-primary-200 mt-4'>
          {subtitle}
        </h3>
        <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
          {title}
        </h2>
      </div>

      {/* content */}
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
