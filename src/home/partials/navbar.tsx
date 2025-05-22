'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationItems } from '@/constants/Navigation.data';

const Navbar = () => {
  const [showHamburger, setShowHamburger] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShowHamburger(window.scrollY > 0);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className='flex-between custom-container md:max-w-auto top-0 z-100 h-20 w-full items-center justify-center px-4 py-6.25 text-white md:absolute md:left-1/2 md:z-100 md:min-w-6xl md:-translate-x-1/2 md:transform md:items-center md:px-24'>
      <div className='border-b-1px flex h-20 w-full items-center justify-between border-neutral-800 md:absolute md:z-100 md:items-center md:justify-between'>
        <div
          className={`md:right-0 md:flex md:flex-row md:items-center ${showHamburger ? 'bg-primary-300 fixed z-99 h-16 w-full rounded-2xl border-neutral-800 px-4 py-4 opacity-81' : ''} md:justify-between`}
        >
          <div className='flex items-start'>
            <div className='fixed z-100 flex items-center gap-2.25 opacity-100 md:flex md:h-2 md:items-center md:gap-4'>
              <div className='1px border-rgba(255, 255, 255, 1) w-6 border md:w-10'></div>
              <span className='text-primary-200 text-md-bold md:text-xl-bold'>
                Muhsinsuny
              </span>
            </div>
          </div>
          <div className='flex items-center justify-between p-2 text-white md:right-1/2 md:h-20 md:w-1/2 md:translate-x-2/3'>
            <div className='flex'>
              <nav className='hidden md:block'>
                <ul className='flex items-center gap-8 md:gap-4 md:p-6'>
                  {navigationItems.map((item, index) => (
                    <li
                      key={index}
                      className='hover:text-primary-200 text-md-regular text-base-white'
                    >
                      <Link className='p-2' href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <Menu className='fixed top-8 right-8 z-100 cursor-pointer duration-300' />
          </SheetTrigger>
          <SheetContent className='z-100 h-screen w-full bg-neutral-950'>
            <SheetHeader className='1px align-center flex h-20 w-full border border-neutral-800 px-4 pt-6.25'>
              <SheetTitle className='fixed z-100'>
                <div className='flex-start items-center gap-2.25'>
                  <div className='border-base-white 1px w-6 border'></div>
                  <span className='text-primary-200 text-md-bold'>
                    Muhsinsuny
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav>
              <ul className='z-10 h-full w-full flex-col items-center gap-6 bg-neutral-950 px-6'>
                {navigationItems.map((item, index) => (
                  <li
                    key={index}
                    className='hover:text-primary-200 text-md-regular text-base-white p-2'
                  >
                    <SheetClose asChild>
                      <Link className='' href={item.href}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
