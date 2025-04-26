import Link from 'next/link';
import React from 'react';

import { navigationItems } from '@/constants/Navigation.data';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-4 text-white'>
      <div className='flex items-start'>
        <div className='flex items-center space-x-2'>
          <div className='1px border-rgba(255, 255, 255, 1) w-10 border'></div>
          <span className='text-primary-200 text-xl font-bold'>
            Muhsin Suny M
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 text-white'>
        <div className='flex space-x-4'>
          <nav className='flex space-x-4'>
            <ul className='flex items-center space-x-4'>
              {navigationItems.map((item, index) => (
                <li key={index} className='hover:text-primary-200'>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
