import React from 'react';
import { Link } from 'react-router-dom';
import Join from './../../pages/join/Join';
import Login from './../../pages/login/Login';

const TopHeader = () => {
  return (
    <div className="top-0 flex h-[47px] w-full justify-center border-b border-[#CBCBCB] bg-white">
      <div className="flex min-w-[1280px] items-center justify-end">
        <ul className="flex items-center gap-[20px]">
          <li className="relative flex items-center gap-[20px]">
            <Link to="/join" className="text-k-15-Regular text-[#B56D6D]">
              회원가입
            </Link>
            <span className="h-[15px] border-r border-[#DBDBDB]"></span>
          </li>
          <li className="relative flex items-center gap-[20px]">
            <Link to="/login" className="text-k-15-Regular">
              로그인
            </Link>
            <span className="h-[15px] border-r border-[#DBDBDB]"></span>
          </li>
          <li>
            <a className="text-k-15-Regular">고객센터</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
