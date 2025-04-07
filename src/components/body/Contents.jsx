import React from "react";
import { Outlet } from "react-router-dom";

const Contents = () => {
  return (
    <div className="w-full bg-[#F2EEEE] h-full">
      <Outlet />
    </div>
  );
};

export default Contents;