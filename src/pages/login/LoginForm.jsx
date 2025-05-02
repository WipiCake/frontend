import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import HideEye from '../../assets/img/HideEye.svg';
import OpenEye from '../../assets/img/OpenEye.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/zod';
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
  } = useForm({ resolver: zodResolver(loginSchema) });

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log(data, 'data');

      const formData = new FormData();
      formData.append('userId', data.id);
      formData.append('password', data.password);

      const response = await axios.post(
        'https://cat-informed-newt.ngrok-free.app/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('res:', response);
      return response;
    },

    onSuccess: (response) => {
      console.log('로그인 성공!');
      console.log('전체 응답 헤더:', response.headers);
      console.log('응답 바디:', response.data);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="login-form w-full">
      <form
        className="flex flex-col gap-[3.2rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="hidden" htmlFor="id">
            아이디
          </label>

          <input
            className="border-b-solid h-[5.7rem] w-[40rem] border-b border-b-[#DBDBDB] py-4 text-k-16-Regular text-[#aaaaaa]"
            type="text"
            id="id"
            placeholder="아이디를 입력하세요."
            {...register('id')}
            aria-invalid={!!errors.id}
            aria-describedby={errors.id ? 'idError' : undefined}
          />
          {errors.id && <p className="pt-2 text-[red]">{errors.id.message}</p>}
        </div>

        <div className="relative">
          <label className="hidden" htmlFor="password">
            비밀번호
          </label>

          <input
            className="border-b-solid h-[5.7rem] w-[40rem] border-b border-b-[#DBDBDB] py-4 text-k-16-Regular text-[#aaaaaa]"
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            placeholder="비밀번호를 입력하세요."
            {...register('password')}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform text-gray-500"
          >
            <img
              src={passwordVisible ? HideEye : OpenEye}
              alt={passwordVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
              className="h-[2.4rem] w-[2.4rem]"
            />
          </button>
          {errors.password && (
            <p className="pt-2 text-[red]">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center text-k-15-Regular text-[#999999]">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="hidden"
            />
            <span
              className={`relative mr-2 flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border-2 ${
                rememberMe ? 'bg-green-500' : 'border-[#DBDBDB]'
              }`}
            >
              {rememberMe && (
                <span className="h-3 w-3 rounded-full bg-white"></span>
              )}
            </span>
            아이디 기억하기
          </label>
          <a href="#" className="text-k-15-Regular text-[#999999]">
            아이디 / 비밀번호 찾기
          </a>
        </div>
        <button
          className="h-[5.6rem] w-[40rem] bg-[#E88B8B] text-k-16-Medium text-white"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
