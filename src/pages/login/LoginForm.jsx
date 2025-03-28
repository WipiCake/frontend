import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일이 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?/~`]).{8,}$/,
                message: "비밀번호는 8자리 이상 특수문자가 포함되어야 합니다.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* 제출 버튼 */}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
