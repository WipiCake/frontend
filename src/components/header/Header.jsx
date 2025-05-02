import React from 'react';
import MainLogo from '../../assets/img/MainLogo.svg';
import User from '../../assets/img/User.svg';
import ShoppingBasket from '../../assets/img/ShoppingBasket.svg';
import Liked from '../../assets/img/Liked.svg';

const Header = () => {
  return (
    <div className="top-[4.7rem] flex h-[9rem] w-full justify-center bg-white">
      <header className="flex min-w-[128rem] items-center justify-between">
        <div className="flex items-center gap-[0.9rem]">
          <h1>
            <a href="#">
              <img
                src={MainLogo}
                alt="메인 로고"
                className="h-[2.8rem] w-auto"
              />
            </a>
          </h1>
          <span className="text-k-18-Medium">윗피 케이크</span>
        </div>
        <div>
          <ul className="flex gap-[3.3rem]">
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
