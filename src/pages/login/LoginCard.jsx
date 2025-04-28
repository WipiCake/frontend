import React from "react";
import LoginForm from "./LoginForm";
import SnsLogin from "./SnsLogin";
import RightArrow from "../../assets/img/RightArrow.svg";

const LoginCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-[496px] px-[48px] py-[40px] bg-white">
        <LoginForm />
        <SnsLogin />
        <div className="w-full h-[56px] flex justify-center items-center border border-[#DBDBDB]">
          <button className="text-k-16-Medium text-[#767676] ">
            회원가입
          </button>
        </div>
        <div className="flex justify-center w-full mt-[48px]">
          <p className="flex items-center text-k-15-Regular text-[15px] text-[#767676] ">
            회원가입이 필요 없으신가요?&nbsp;
            <a className="text-[#1A1A1A] flex items-center" href="#">
              비회원 주문
              <img src={RightArrow} alt="으론쪽 화살표" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;