import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HideEye from "../../assets/img/HideEye.svg";
import OpenEye from "../../assets/img/OpenEye.svg";
// import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  // const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log(data, "data");
  
      const formData = new FormData();
      formData.append("username", data.email);
      formData.append("password", data.password);
  
      const response = await axios.post(
        "https://cat-informed-newt.ngrok-free.app/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("res:", response);
      return response;
    },
  
    onSuccess: (response) => {
      console.log("로그인 성공!");
      console.log("전체 응답 헤더:", response.headers); 
      console.log("응답 바디:", response.data);
    },
    
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="w-full login-form">
      <form
        className="flex flex-col gap-[32px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="hidden" htmlFor="email">
            이메일
          </label>

          <input
            className="w-[400px] h-[57px] border-b border-b-solid  border-b-[#DBDBDB] py-4 text-[#aaaaaa] text-k-16-Regular"
            type="text"
            id="email"
            placeholder="아이디를 입력하세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
            })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && (
            <p className="pt-2 text-[red]">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="hidden" htmlFor="password">
            비밀번호
          </label>

          <input
            className="w-[400px] h-[57px] border-b border-b-solid  border-b-[#DBDBDB] py-4 text-[#aaaaaa] text-k-16-Regular"
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="비밀번호를 입력하세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 text-gray-500 transform -translate-y-1/2 top-1/2"
          >

            <img
              src={passwordVisible ? HideEye : OpenEye}
              alt={passwordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
              className="w-[24px] h-[24px]"
            />
          </button>
          {errors.password && (
            <p className="pt-2 text-[red]">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer text-k-15-Regular text-[#999999]">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="hidden"
            />
            <span
              className={`relative flex items-center justify-center w-[22px] h-[22px] mr-2 border-2 rounded-full ${
                rememberMe ? "bg-green-500" : "border-[#DBDBDB]"
              }`}
            >
              {rememberMe && (
                <span className="w-3 h-3 bg-white rounded-full"></span>
              )}
            </span>
            아이디 기억하기
          </label>
          <a href="#" className="text-k-15-Regular text-[#999999]">아이디 / 비밀번호 찾기</a>
        </div>
        <button
          className="bg-[#E88B8B] w-[400px] h-[56px] text-white font-medium text-k-16-Medium"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;