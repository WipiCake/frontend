import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../header/MainHeader";
import Footer from "../footer/Footer";

const Contents = () => {
  return (
    <>
      <MainHeader />
      <div className="w-full bg-[#F2EEEE] h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Contents;