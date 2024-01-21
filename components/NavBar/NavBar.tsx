import React from 'react';
import NavItems from './NavItems';
import SocialIcons from './SocialIcons';

const NavBar = () => {
  return (
    <nav className="w-[20%] h-full border-r-8">
      <section className="h-[90%]">
        <NavItems />
      </section>
      <section className="h-[10%]">
        <SocialIcons />
      </section>
    </nav>
  );
};

export default NavBar;
