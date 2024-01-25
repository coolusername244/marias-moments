'use client';
import React, { FC } from 'react';
import { NavigationItem } from '@/types';

type NavItemsProps = {
  navLinksShownHandler: () => void;
};

const navigation: NavigationItem[] = [
  { name: 'Gallery', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavItems: FC<NavItemsProps> = ({ navLinksShownHandler }) => {
  return (
    <div className="h-[80vh] flex flex-col lg:inline-block justify-center lg:h-fit lg:flex-end">
      {navigation.map((item, i) => (
        <span
          key={i}
          className="flex items-center justify-center h-[20%] lg:inline-block lg:mt-0 lg:ml-12 lg:mr-2"
        >
          <a
            onClick={navLinksShownHandler}
            href="#"
            className="text-white text-2xl lg:text-lg"
          >
            {item.name}
          </a>
        </span>
      ))}
    </div>
  );
};

export default NavItems;
