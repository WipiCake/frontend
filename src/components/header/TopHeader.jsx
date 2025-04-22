import React from "react";

const TopHeader = () => {
  return (
    <div className="w-full border-b border-[#CBCBCB] h-[47px]  top-0 flex justify-center bg-white">
      <div className="flex min-w-[1280px] justify-end  items-center ">
        <ul className="flex items-center  gap-[40px]">
          <li className="relative after:content-['|'] after:absolute after:right-[-20px]">
            <a href="#">회원가입</a>
          </li>
          <li className="relative after:content-['|'] after:absolute after:right-[-20px]">
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;