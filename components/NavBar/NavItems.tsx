import React from 'react';
import { NavigationItem } from '@/types';

const navigation: NavigationItem[] = [
  { name: 'Gallery', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavItems = () => {
  return (
    <ul className="text-center">
      {navigation.map((item, i) => {
        return <li key={i}>{item.name}</li>;
      })}
    </ul>
  );
};

export default NavItems;
