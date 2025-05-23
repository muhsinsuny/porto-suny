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
      const isMobile = window.innerWidth < 768;
      const hasScrolled = window.scrollY > 0;

      setShowHamburger(isMobile && hasScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className='fixed top-0 z-100 w-full opacity-81'>
      {/* Container */}
      <div className='custom-container flex h-20 items-center justify-between overflow-hidden bg-neutral-950 px-4 opacity-85 md:px-24'>
        {/* Logo */}
        <div className='flex items-center gap-4'>
          <div className='w-6 border border-white'></div>
          <span className='text-primary-200 text-md-bold md:text-xl-bold'>
            Muhsinsuny
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-8'>
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className='hover:text-primary-200 text-base-white'
              >
                <Link href={item.href} className='p-2'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        {showHamburger && (
          <Sheet>
            <SheetTrigger asChild>
              <Menu className='fixed top-6 right-6 z-100 cursor-pointer text-white' />
            </SheetTrigger>
            <SheetContent className='z-100 h-screen w-full bg-neutral-950'>
              <SheetHeader className='border-b border-neutral-800 px-4 py-6'>
                <SheetTitle>
                  <div className='flex items-center gap-4'>
                    <div className='w-6 border border-white'></div>
                    <span className='text-primary-200 text-md-bold'>
                      Muhsinsuny
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className='mt-8'>
                <ul className='flex flex-col items-start gap-6 px-6'>
                  {navigationItems.map((item, index) => (
                    <li key={index} className='text-base-white'>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className='hover:text-primary-200 block p-2'
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
