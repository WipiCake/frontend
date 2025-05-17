import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../utils/zod.js';
import axios from 'axios';
import IdInput from './input/IdInput.jsx';
import PasswordInput from './input/PasswordInput.jsx';
import ConfirmPasswordInput from './input/ConfirmPasswordInput.jsx';
import NameInput from './input/NameInput';
import EmailInput from './input/EmailInput';
import PhoneInput from './input/PhoneInput';
import VerificationCodeInput from './input/VerificationCodeInput';
import AddressInput from './input/AddressInput';
import GenderInput from './input/GenderInput';
import BirthInputGroup from './input/BirthInputGroup';
import TermsAgreement from './input/TermsAgreement';

const SignUpForm = () => {
  const onSubmit = async (data) => {
    console.log('📦 제출된 전체 form 데이터:', data);
    const payload = {
      userId: data.username,
      email: data.email,
      password: data.password,
      nickName: data.name,
      phoneNumber: data.phone,
      zipAddress: data.zipAddress,
      mainAddress: data.mainAddress,
      detailAddress: data.addressDetail,
      birthDt: `${data.birthYear}-${data.birthMonth.padStart(2, '0')}-${data.birthDay.padStart(2, '0')}`,
      gender: data.gender,
    };

    try {
      const response = await axios.post(
        'https://cat-informed-newt.ngrok-free.app/user/signup',
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log('✅ 회원가입 성공', response.data);
      alert('회원가입이 완료되었습니다!');
      // navigate('/login');
    } catch (error) {
      console.error('❌ 회원가입 실패', error.response?.data || error.message);
      alert('회원가입 실패');
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // watch,
    setValue,
    clearErrors,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const values = watch();

  const isFormValid = useMemo(() => {
    return (
      values.username &&
      values.password &&
      values.confirmPassword &&
      values.name &&
      values.email &&
      values.phone &&
      values.verificationCode &&
      values.zipAddress &&
      values.mainAddress &&
      values.birthYear &&
      values.birthMonth &&
      values.birthDay &&
      values.gender &&
      values.termsRequired &&
      values.privacyRequired
    );
  }, [values]);

  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const [showVerificationInput, setshowVerificationInput] = useState(false);

  const handleAddressSearch = () => {
    setIsAddressOpen(true);
  };

  const handleAddressComplete = ({ address, zonecode }) => {
    setValue('mainAddress', address);
    setValue('zipAddress', zonecode);
    console.log('주소 설정 완료:', address, zonecode);
    setIsAddressOpen(false);
  };

  const [agreements, setAgreements] = useState({
    all: false,
    termsRequired: false,
    privacyRequired: false,
    marketingOptional: false,
  });

  const handleAllAgree = () => {
    const newState = !agreements.all;
    setAgreements({
      all: newState,
      termsRequired: newState,
      privacyRequired: newState,
      marketingOptional: newState,
    });
    setValue('termsRequired', newState);
    setValue('privacyRequired', newState);
    if (newState) clearErrors(['termsRequired', 'privacyRequired']);
  };

  const handleCheckboxChange = (name) => {
    const newState = {
      ...agreements,
      [name]: !agreements[name],
    };
    newState.all =
      newState.termsRequired &&
      newState.privacyRequired &&
      newState.marketingOptional;

    setAgreements(newState);

    if (name === 'termsRequired' || name === 'privacyRequired') {
      setValue(name, !agreements[name]);
      if (!agreements[name]) clearErrors(name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pb-[17rem] pt-[8rem]">
      <h1 className="pb-[7.2rem] text-k-28_Medium text-black-50">회원가입</h1>
      <form
        className="flex w-[63rem] flex-col gap-[3.2rem] bg-bg-10 px-[4.4rem] py-[4rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 아이디 */}
        <IdInput register={register} error={errors} />

        {/* 비밀번호 */}
        <PasswordInput register={register} errors={errors} />

        {/* 비밀번호 확인 */}
        <ConfirmPasswordInput register={register} errors={errors} />

        {/* 이름 */}
        <NameInput register={register} errors={errors} />

        {/* 이메일 */}
        <EmailInput register={register} errors={errors} />

        {/* 휴대폰 번호 */}
        <PhoneInput
          register={register}
          errors={errors}
          setshowVerificationInput={setshowVerificationInput}
          watch={watch}
        />

        {/* 휴대폰 인증번호 입력 칸 */}
        {showVerificationInput && (
          <VerificationCodeInput register={register} errors={errors} />
        )}

        {/* 주소 검색 */}
        <AddressInput
          register={register}
          errors={errors}
          isAddressOpen={isAddressOpen}
          handleAddressSearch={handleAddressSearch}
          handleAddressComplete={handleAddressComplete}
        />

        {/* 성별 */}
        <GenderInput register={register} errors={errors} />

        {/* 생년월일 */}
        <BirthInputGroup register={register} errors={errors} />

        {/* ✅ 이용약관 동의 */}
        <TermsAgreement
          register={register}
          errors={errors}
          handleAllAgree={handleAllAgree}
          handleCheckboxChange={handleCheckboxChange}
          agreements={agreements}
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`mx-auto h-[5.6rem] w-[41.4rem] text-k-16-Regular ${
            isFormValid ? 'bg-pink-40 text-bg-10' : 'bg-gray-300 text-white'
          }`}
        >
          회원가입
        </button>
      </form>
      {console.log('❗ errors 상태 확인:', errors)}
    </div>
  );
};

export default SignUpForm;
