import React from "react";
import KakaoLogo from "../../assets/img/KakaoLogo.svg";
import GoogleLogo from "../../assets/img/GoogleLogo.svg";

const SnsLogin = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="w-[337px]  h-[56px] flex bg-[#FEE500] items-center justify-center rounded-[12px] gap-[8px]">
        <img className="w-[30px] h-[30px]" src={KakaoLogo} alt="카카오 로고" />
        <a className="font-medium text-[18px]" href="#">
          카카오로 로그인하기
        </a>
      </div>
      <div className="w-[337px]  h-[56px] flex bg-[#ffffff] items-center justify-center rounded-[12px] gap-[8px]">
        <img src={GoogleLogo} alt="구글 로고" />
        <a className="font-medium text-[18px]" href="#">
          구글로 로그인하기
        </a>
      </div>
    </div>
  );
};

export default SnsLogin;
