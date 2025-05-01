import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../header/MainHeader';
import Footer from '../footer/Footer';

const Contents = () => {
  return (
    <>
      <MainHeader />
      <div className="bg-bg-30 h-full min-h-[100vh] w-full pb-[17rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Contents;
