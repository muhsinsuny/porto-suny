'use client';

import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React JS', level: 50 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML', level: 99 },
  { name: 'Docker', level: 70 },
  { name: 'JavaScript', level: 90 },
];

export default function SkillBars() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div>
      <div ref={ref} className='flex h-full w-full flex-col gap-4 p-4'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='align-center flex flex-col gap-4 md:gap-6'
          >
            {/* Bar & Label */}
            <div className='flex-center flex gap-4'>
              {/* Progress Bar Container */}
              <div className='relative h-full w-full overflow-hidden md:w-full'>
                <div className='flex flex-row items-center gap-2'>
                  {/* Filled Green Bar */}
                  <div
                    className='bg-primary-300 border-primary-300 relative z-10 flex h-11 items-center rounded-2xl border px-4 transition-all duration-1000 ease-in-out md:h-16 md:w-full'
                    style={{
                      width: inView ? '100%' : '0%',
                      transitionDelay: inView ? '0s' : '0s',
                    }}
                    onTransitionEnd={(e) => {
                      if (
                        inView &&
                        (e.target as HTMLElement).style.width === '100%'
                      ) {
                        (e.target as HTMLElement).style.width =
                          `${skill.level}%`;
                      }
                    }}
                  >
                    {/* Garis miring dalam bar */}
                    <div className='pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-50' />
                    {/* Nama skill di dalam bar */}
                    <span className='text-neutral-25 relative z-10 truncate text-sm font-semibold'>
                      {skill.name}
                    </span>
                  </div>
                  <div
                    className='absolute right-0 z-0 h-px bg-neutral-800'
                    style={{ width: `100%` }}
                  ></div>
                </div>
              </div>

              {/* Percentage */}
              <div className='flex items-center'>
                <span className='text-base-white md:text-xl-semibold text-sm font-semibold'>
                  {skill.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
