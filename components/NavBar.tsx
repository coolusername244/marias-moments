import React from 'react';

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'Gallery', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navigation.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
