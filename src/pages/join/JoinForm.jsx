import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import RedStar from "../../assets/img/RedStar.svg";
import AddressSearch from "./AddressSearch.jsx";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const year = watch("birthYear");
  const month = watch("birthMonth");
  const day = watch("birthDay");

  useEffect(() => {
    if (year && month && day) {
      const birthDt = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      setValue("birthDt", birthDt);
    }
  }, [year, month, day, setValue]);

  const handleAddressSearch = () => setIsAddressOpen(true);

  const handleAddressComplete = ({ address, zonecode }) => {
    setValue("mainAddress", address);
    setValue("zipAddress", zonecode);
    setIsAddressOpen(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
  
    formData.append("userId", data.userId);
    formData.append("password", data.password);
    formData.append("nickName", data.nickName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("zipAddress", data.zipAddress);
    formData.append("mainAddress", data.mainAddress);
    formData.append("detailAddress", data.detailAddress);
    formData.append("birthDt", data.birthDt);
    formData.append("gender", data.gender);
  
    try {
      const response = await axios.post(
        "https://cat-informed-newt.ngrok-free.app/user/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      console.log("✅ 회원가입 성공!");
      console.log("📦 서버 응답:", response.data);
  
      alert("회원가입이 완료되었습니다!");
      //navigate("/login"); 
    } catch (error) {
      console.error("❌ 회원가입 실패:", error.response?.data || error.message);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[80px] pb-[170px]">
      <h1 className="text-[#1A1A1A] text-[28px] font-medium pb-[72px]">회원가입</h1>

      <form
        className="flex flex-col gap-[32px] bg-white py-[40px] px-[44px] w-[630px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 아이디 */}
        <InputField label="아이디" name="userId" register={register} errors={errors} required />

        {/* 비밀번호 */}
        <InputField label="비밀번호" name="password" type="password" register={register} errors={errors} required minLength={8} />

        {/* 비밀번호 확인 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            비밀번호 확인 <img className="pb-[16px]" src={RedStar} alt="필수입력" />
          </label>
          <input
            className="w-[413px] h-[56px] p-4 border border-[#999999]"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("confirmPassword", {
              required: "비밀번호 확인은 필수입니다.",
              validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다.",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        {/* 닉네임 */}
        <InputField label="이름" name="nickName" register={register} errors={errors} required />

        {/* 이메일 */}
        <InputField
          label="이메일"
          name="email"
          type="email"
          register={register}
          errors={errors}
          required
          pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        />

        {/* 휴대폰 번호 */}
        <InputField
          label="휴대폰"
          name="phoneNumber"
          register={register}
          errors={errors}
          required
          pattern={/^[0-9]{10,11}$/}
          placeholder="숫자만 입력해주세요"
        />

        {/* 주소 */}
        <div className="flex items-start justify-between w-full">
          <label className="flex gap-[4px]">
            주소 <img className="pb-[16px]" src={RedStar} alt="필수입력" />
          </label>
          <div className="flex flex-col w-[414px] gap-[16px]">
            <div className="flex justify-between">
              <input
                className="w-[198px] h-[56px] p-4 border border-[#999999]"
                placeholder="우편번호"
                {...register("zipAddress", { required: "우편번호는 필수입니다." })}
                readOnly
              />
              <button type="button" className="bg-[#E88B8B] text-white w-[198px]" onClick={handleAddressSearch}>
                주소 검색
              </button>
            </div>
            <input
              className="w-[413px] h-[56px] p-4 border border-[#999999]"
              placeholder="기본 주소"
              {...register("mainAddress", { required: "기본 주소는 필수입니다." })}
              readOnly
            />
            <input
              className="w-[413px] h-[56px] p-4 border border-[#999999]"
              placeholder="상세 주소 (선택)"
              {...register("detailAddress")}
            />
          </div>
        </div>

        {/* 성별 */}
        <div className="flex items-center justify-between w-full">
          <label className="flex gap-[4px]">
            성별 <img className="pb-[16px]" src={RedStar} alt="필수입력" />
          </label>
          <div className="w-[414px] flex gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "성별을 선택해주세요." })}
                className="appearance-none w-6 h-6 border border-[#E88B8B] rounded-full checked:bg-[#E88B8B]"
              />
              남자
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="female"
                {...register("gender")}
                className="appearance-none w-6 h-6 border border-[#E88B8B] rounded-full checked:bg-[#E88B8B]"
              />
              여자
            </label>
          </div>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
        </div>

        {/* 생년월일 */}
        <div>
          <label className="flex gap-[4px]">
            생년월일 <img className="pb-[16px]" src={RedStar} alt="필수입력" />
          </label>
          <div className="flex gap-2">
            <input type="number" placeholder="YYYY" {...register("birthYear", { required: true, minLength: 4 })} />
            <input type="number" placeholder="MM" {...register("birthMonth", { required: true, minLength: 2 })} />
            <input type="number" placeholder="DD" {...register("birthDay", { required: true, minLength: 2 })} />
          </div>
          <input type="hidden" {...register("birthDt", { required: true })} />
        </div>

        {/* 이용약관 */}
        <div>
          <label className="flex gap-[4px]">
            <input type="checkbox" {...register("terms", { required: "이용약관에 동의해야 합니다." })} />
            이용약관 동의 <img className="pb-[16px]" src={RedStar} alt="필수입력" />
          </label>
          {errors.terms && <p>{errors.terms.message}</p>}
        </div>

        {isAddressOpen && <AddressSearch onComplete={handleAddressComplete} />}

        <button className="bg-[#E88B8B] text-white w-[414px] h-[56px] mx-auto" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, register, errors, required, type = "text", minLength, pattern, placeholder }) => (
  <div className="flex items-center justify-between w-full">
    <label className="flex gap-[4px]">
      {label} <img className="pb-[16px]" src={RedStar} alt="필수입력" />
    </label>
    <input
      className="w-[413px] h-[56px] p-4 border border-[#999999]"
      type={type}
      placeholder={placeholder || `${label}을 입력해주세요`}
      {...register(name, {
        required: required ? `${label}은(는) 필수입니다.` : false,
        minLength: minLength ? { value: minLength, message: `${minLength}자 이상 입력해주세요.` } : undefined,
        pattern: pattern ? { value: pattern, message: "형식이 올바르지 않습니다." } : undefined,
      })}
    />
    {errors[name] && <p>{errors[name].message}</p>}
  </div>
);

export default SignUpForm;
