// 'use client';

// import Image from 'next/image';

// const images = [
//   { id: 1, src: '/icons/icon1.png' },
//   { id: 2, src: '/icons/icon2.png' },
//   { id: 3, src: '/icons/icon3.png' },
//   { id: 4, src: '/icons/icon4.png' },
//   { id: 5, src: '/icons/icon5.png' },
//   { id: 6, src: '/icons/icon6.png' },
//   { id: 7, src: '/icons/icon7.png' },
//   { id: 8, src: '/icons/icon8.png' },
//   { id: 9, src: '/icons/icon9.png' },
//   { id: 10, src: '/icons/icon10.png' },
//   { id: 11, src: '/icons/icon11.png' },
//   { id: 12, src: '/icons/icon12.png' },
// ];

// const icons = Array.from({ length: 12 }, (_, i) => `/icons/icon${i + 1}.png`);

// export default function MarqueeIcons() {
//   return (
//     <div className='bg-base-background w-full overflow-hidden'>
//       <div className='relative flex h-fit w-[120px] flex-col justify-center gap-2 md:h-[152px] md:w-[152px]'>
//         {/* Row 1 - Kiri */}
//         <div
//           className='animate-marquee flex gap-[48.32px] whitespace-nowrap md:gap-[54.72px]'
//           style={
//             {
//               '--duration': '30s',
//               '--gap': '48.32px',
//             } as React.CSSProperties
//           }
//         >
//           {images.map((img, i) => (
//             <div
//               key={`row1-${i}`}
//               className='border-1px flex items-center justify-center rounded-full border-neutral-800 p-[6.4px] md:p-[8.53px]'
//             >
//               <Image
//                 src={img.src}
//                 alt={`icon-${i}`}
//                 width={26}
//                 height={26}
//                 className='md:h-auto md:w-[34px]'
//               />
//             </div>
//           ))}
//         </div>

//         {/* Row 2 - Kanan */}
//         <div
//           className='animate-marquee-reverse flex gap-[48.32px] whitespace-nowrap md:gap-[54.72px]'
//           style={
//             {
//               '--duration': '20s',
//               '--gap': '48.32px',
//             } as React.CSSProperties
//           }
//         >
//           {[...icons, ...icons].map((src, i) => (
//             <div
//               key={`row2-${i}`}
//               className='border-1px flex items-center justify-center rounded-full border-neutral-800 p-[6.4px] md:p-[8.53px]'
//             >
//               <Image
//                 src={src}
//                 alt={`icon-${i}`}
//                 width={26}
//                 height={26}
//                 className='md:h-auto md:w-[34px]'
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
              'animate-direction-reverse': direction,
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
