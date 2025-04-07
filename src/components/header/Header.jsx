import React from "react";
import MainLogo from "../../assets/img/MainLogo.svg";
import User from "../../assets/img/User.svg";
import ShoppingBasket from "../../assets/img/ShoppingBasket.svg";
import Liked from "../../assets/img/Liked.svg";

const Header = () => {
  return (
    <div className="flex justify-center w-full  top-[47px] h-[90px] bg-white border-b border-[#CBCBCB]">
      <header className="flex min-w-[1280px] justify-between items-center">
        <div className="flex items-center gap-[9px]">
          <h1>
            <a href="#">
              <img src={MainLogo} alt="메인 로고" className="w-auto h-[28px]" />
            </a>
          </h1>
          <span className="text-[18px] font-medium">윗피 케이크</span>
        </div>
        <div>
          <ul className="flex gap-[33px]">
            <li>
              <a href="#">
                <img src={User} alt="유저 아이콘" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ShoppingBasket} alt="장바구니 아이콘" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Liked} alt="좋아요 아이콘" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;