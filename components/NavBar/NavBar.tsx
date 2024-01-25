'use client';
import React, { useState } from 'react';
import NavItems from './NavItems';

const NavBar = () => {
  const [navLinksShown, setNavLinksShown] = useState<boolean>(false);

  const navLinksShownHandler = () => {
    setNavLinksShown(false);
  };

  return (
    <nav className="flex justify-between flex-wrap bg-black text-white p-6">
      <div className="flex mr-6">
        <span className="font-semibold text-2xl tracking-wide">
          Maria&apos;s Moments
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex"
          onClick={() => {
            setNavLinksShown(!navLinksShown);
          }}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          navLinksShown ? 'inline' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <NavItems navLinksShownHandler={navLinksShownHandler} />
      </div>
    </nav>
  );
};

export default NavBar;
