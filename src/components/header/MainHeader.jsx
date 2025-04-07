import React from "react";
import TopHeader from "./TopHeader";
import Header from "./Header";

const MainHeader = () => {
  return (
    <div className="flex flex-col w-full ">
      <TopHeader />
      <Header />
    </div>
  );
};

export default MainHeader;