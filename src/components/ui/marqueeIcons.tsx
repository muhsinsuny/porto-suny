import { ComponentPropsWithRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  direction?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = true,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  direction = 'right',
  ...props
}) => {
  return (
    <div
      className={cn(
        'group border-1px flex [gap:var(--gap)] overflow-hidden rounded-full [--duration:40s] [--gap:3rem]',
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              [direction === 'right'
                ? 'animate-marquee-reverse'
                : 'animate-marquee']: !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
              'animate-direction-reverse': direction === 'right',
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

<div className='parent'>
  <div className='child'></div>
</div>;
