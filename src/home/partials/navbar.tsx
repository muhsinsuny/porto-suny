import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationItems } from '@/constants/Navigation.data';

const Navbar = () => {
  return (
    <header className='flex-between custom-container md:max-w-auto top-0 z-100 h-20 w-full items-center justify-center px-4 py-6.25 text-white md:absolute md:left-1/2 md:z-100 md:min-w-6xl md:-translate-x-1/2 md:transform md:items-center md:px-32'>
      <div className='border-b-1px md:max-w-auto flex h-20 w-full items-center justify-between border-neutral-800 md:absolute md:z-100 md:items-center md:justify-between'>
        <div className='md:right-0 md:flex md:flex-row md:items-center md:justify-between md:gap-80'>
          <div className='flex items-start'>
            <div className='flex items-center gap-2.25 md:gap-4'>
              <div className='1px border-rgba(255, 255, 255, 1) w-6 border md:w-10'></div>
              <span className='text-primary-200 text-md-bold md:text-xl-bold'>
                Muhsinsuny
              </span>
            </div>
          </div>
          <div className='flex items-center justify-between p-2 text-white md:h-20 md:w-full md:mix-blend-hard-light'>
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
          <SheetTrigger asChild>
            <Menu className='cursor-pointer md:hidden' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='1px align-center flex h-20 w-full border border-neutral-800 px-4 pt-6.25'>
              <SheetTitle>
                <div className='flex-start items-center gap-2.25'>
                  <div className='border-base-white 1px w-6 border'></div>
                  <span className='text-primary-200 text-md-bold'>
                    Muhsinsuny
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav>
              <ul className='bg-base-background z-100 flex-col items-center gap-6 px-6'>
                {navigationItems.map((item, index) => (
                  <li
                    key={index}
                    className='hover:text-primary-200 text-md-regular text-base-white p-2'
                  >
                    <Link className='' href={item.href}>
                      {item.label}
                    </Link>
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
