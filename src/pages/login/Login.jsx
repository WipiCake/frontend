import React from "react";
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <div className="flex justify-center w-full pt-[80px] pb-[162px]  mx-auto">
      <div className="w-full max-w-[1280px] flex flex-col gap-[24px] items-center">
        <div className="flex flex-col items-center gap-[40px]">
          <div>
            <h2 className="text-k-28_Medium">로그인</h2>
          </div>
          <p className="text-center text-k-18-Medium">
            윗피 케이크에
            <br />
            오신 걸 환영합니다!
          </p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;