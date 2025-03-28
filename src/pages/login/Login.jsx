import React from "react";
import SnsLogin from "./SnsLogin";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1280px] border border-black flex flex-col gap-[12px] items-center">
        <div className="flex flex-col items-center gap-[64px]">
          <div>
            <h2 className="text-[28px] font-medium">로그인</h2>
          </div>
          <p className="font-semibold text-center text-[20px]">
            윗피 케이크에
            <br />
            오신 걸 환영합니다
          </p>
          <span className="text-[15px] font-normal">
            SNS 계정으로 간편하게 로그인 하세요.
          </span>
        </div>
        <SnsLogin />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
