import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../header/MainHeader';
import Footer from '../footer/Footer';

const Contents = () => {
  return (
    <>
      <MainHeader />
      <div className="h-full w-full bg-white pb-[17rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Contents;
