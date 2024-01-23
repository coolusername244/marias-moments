import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import Homepage from '@/components/Homepage';

const Main = () => {
  return (
    <main className="flex h-screen">
      <NavBar />
      <Homepage />
    </main>
  );
};

export default Main;
