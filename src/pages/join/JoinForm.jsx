import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RedStar from "../../assets/img/RedStar.svg";
import AddressSearch from "./AddressSearch.jsx";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isAddressOpen, setIsAddressOpen] = useState(false); // 🔧 주소 검색창 열기 상태

  const handleAddressSearch = () => {
    setIsAddressOpen(true); // 🔧 주소 검색창 열기
  };

  const handleAddressComplete = ({ address, zonecode }) => {
    setValue("address", address); // 🔧 주소 설정
    setValue("zipcode", zonecode); // 🔧 우편번호 설정
    setIsAddressOpen(false); // 🔧 주소창 닫기
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[80px] pb-[170px]">
      <h1 className="text-[#1A1A1A] text-[28px] font-medium pb-[72px]">
        회원가입
      </h1>
      <form
        className="flex flex-col gap-[32px] bg-white py-[40px] px-[44px] w-[630px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 아이디 */}
        <div className="flex items-center justify-between w-full ">
          <label className="flex gap-[4px]">
            아이디
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register("username", { required: "아이디는 필수입니다." })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        {/* 비밀번호 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            비밀번호
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* 비밀번호 확인 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            비밀번호 확인
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("confirmPassword", {
              required: "비밀번호 확인은 필수입니다.",
              validate: (value) =>
                value === watch("password") || "비밀번호가 일치하지 않습니다.",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        {/* 이름 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            이름
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="text"
            placeholder="이름을 입력해주세요"
            {...register("name", { required: "이름은 필수입니다." })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* 이메일 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            이메일
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email", {
              required: "이메일은 필수입니다.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "유효한 이메일을 입력하세요.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* 휴대폰 번호 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            휴대폰
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="text"
            placeholder="숫자만 입력해주세요"
            {...register("phone", {
              required: "휴대폰 번호는 필수입니다.",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "유효한 휴대폰 번호를 입력하세요.",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        {/* 주소 검색 */}
        <div className="flex items-start justify-between w-full ">
          <label className="flex gap-[4px]">
            주소
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div className="flex flex-col w-[414px]  gap-[16px]">
            <div className="flex justify-between">
              <input
                className="w-[198px] h-[56px] p-4 border border-[#999999]"
                placeholder="우편번호"
                {...register("zipcode")}
                readOnly
              />
              <button
                className="bg-[#E88B8B] text-white w-[198px]"
                type="button"
                onClick={handleAddressSearch}
              >
                주소 검색
              </button>
            </div>

            <div>
              <input
                className="w-[413px] h-[56px] p-4 border border-[#999999]"
                placeholder="기본 주소"
                {...register("address")}
                readOnly
              />
            </div>

            <div>
              <input
                className="w-[413px] h-[56px] p-4 border border-[#999999]"
                placeholder="나머지 주소 (선택)"
                {...register("addressDetail")}
              />
            </div>
          </div>

          {errors.address && <p>{errors.address.message}</p>}
        </div>

        {/* 성별 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            성별
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>

          <div className="w-[414px] flex gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "성별을 선택해주세요." })}
                className="appearance-none w-6 h-6 p-[1px] border border-[#E88B8B] rounded-full checked:bg-[#E88B8B] checked:border-transparent"
              />
              남자
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="female"
                {...register("gender")}
                className="appearance-none w-5 h-5 border border-[#E88B8B] rounded-full checked:bg-[#E88B8B] checked:border-transparent"
              />
              여자
            </label>
          </div>

          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        {/* 생년월일 */}
        <div>
          <label className="flex gap-[4px]">
            생년월일
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              type="number"
              placeholder="YYYY"
              {...register("birthYear", {
                required: "생년월일을 입력하세요.",
                minLength: { value: 4, message: "유효한 연도를 입력하세요." },
              })}
            />
            <input
              type="number"
              placeholder="MM"
              {...register("birthMonth", {
                required: "생년월일을 입력하세요.",
                minLength: { value: 2, message: "유효한 월을 입력하세요." },
              })}
            />
            <input
              type="number"
              placeholder="DD"
              {...register("birthDay", {
                required: "생년월일을 입력하세요.",
                minLength: { value: 2, message: "유효한 일을 입력하세요." },
              })}
            />
          </div>
          {errors.birthYear && <p>{errors.birthYear.message}</p>}
          {errors.birthMonth && <p>{errors.birthMonth.message}</p>}
          {errors.birthDay && <p>{errors.birthDay.message}</p>}
        </div>

        {/* 이용약관 동의 */}
        <div>
          <label className="flex gap-[4px]">
            <input
              type="checkbox"
              {...register("terms", {
                required: "이용약관에 동의해야 합니다.",
              })}
            />
            이용약관 동의
            <img className="pb-[16px]" src={RedStar} alt="필수입력 이미지" />
          </label>
          {errors.terms && <p>{errors.terms.message}</p>}
        </div>

        {isAddressOpen && (
          <AddressSearch onComplete={handleAddressComplete} /> // 🔧 주소 검색 팝업 표시
        )}

        <button
          className="bg-[#E88B8B] text-white w-[414px] h-[56px] mx-auto"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;