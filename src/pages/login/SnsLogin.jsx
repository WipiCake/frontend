import React from 'react';
import KakaoLogo from '../../assets/img/KakaoLogo.svg';
import GoogleLogo from '../../assets/img/GoogleLogo.svg';

const SnsLogin = () => {
  return (
    <div className="mb-[7.2rem] mt-[3.6rem] flex w-full flex-col gap-[2rem]">
      <p className="cursor-pointer text-center text-k-15-Regular text-[#767676]">
        SNS 간편 로그인
      </p>
      <div className="flex w-full justify-center gap-[2rem]">
        <div className="flex h-[4.8rem] w-[4.8rem] cursor-pointer items-center justify-center gap-[0.8rem] rounded-full border border-[#DBDBDB] pl-[0.1rem]">
          <img
            className="h-[3rem] w-[3rem]"
            src={KakaoLogo}
            alt="카카오 로고"
          />
        </div>
        <div className="flex h-[4.8rem] w-[4.8rem] cursor-pointer items-center justify-center gap-[0.8rem] rounded-full border border-[#DBDBDB]">
          <img className="h-[3rem] w-[3rem]" src={GoogleLogo} alt="구글 로고" />
        </div>
      </div>
    </div>
  );
};

export default SnsLogin;
