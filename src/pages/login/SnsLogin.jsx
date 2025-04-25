import React from "react";
import KakaoLogo from "../../assets/img/KakaoLogo.svg";
import GoogleLogo from "../../assets/img/GoogleLogo.svg";

const SnsLogin = () => {
  return (
    <div className="flex flex-col gap-[20px] mt-[36px] mb-[72px] w-full">
      <p className="text-k-15-Regular text-center text-[#767676] cursor-pointer">
        SNS 간편 로그인
      </p>
      <div className="flex  gap-[20px] w-full justify-center">
        <div className="w-[48px]  h-[48px] flex border border-[#DBDBDB] rounded-full items-center justify-center  gap-[8px] pl-[1px] cursor-pointer">
          <img
            className="w-[30px] h-[30px]"
            src={KakaoLogo}
            alt="카카오 로고"
          />
        </div>
        <div className="w-[48px]  h-[48px] flex border border-[#DBDBDB] rounded-full items-center justify-center  gap-[8px] cursor-pointer">
          <img className="w-[30px] h-[30px]" src={GoogleLogo} alt="구글 로고" />
        </div>
      </div>
    </div>
  );
};

export default SnsLogin;