import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../utils/zod.js';
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
import api from '../../api/axiosInstance.js';
import { USER_SIGNUP_URL } from './../../constants/endpoint';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  // 페이지 이동
  const navigate = useNavigate();
  // 폼 데이터 제출 기능
  const onSubmit = async (data) => {
    console.log('📦 제출된 전체 form 데이터:', data);
    // 서버에 전송할 데이터 정리 key : value
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
    // 서버에 폼 데이터 전송 시도
    try {
      const response = await api.post(`${USER_SIGNUP_URL}`, payload, {
        // 요청을 json 으로 보낸다는 코드
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('✅ 회원가입 성공', response.data);
      alert('회원가입이 완료되었습니다!');
      // 회원가입 성공시 로그인 화면으로 이동
      navigate('/login');
    } catch (error) {
      console.error('❌ 회원가입 실패', error.response?.data || error.message);
      alert('회원가입 실패');
    }
  };

  // react-hook-form 과 zod 를 활용한 실시간 유효성 검사
  const {
    register, // 입력 필드를 react-hook-form 과 연결
    handleSubmit, // 폼 데이터 제출 이벤트 핸들러
    watch, // 특정 필드 값을 실시간으로 감시
    formState: { errors }, // 유효성 검사 에러 관리 객체
    setValue, // 입력 필드에 값 넣어주기
    clearErrors, // 특정 필드의 에러 제거
  } = useForm({
    // zodResolver 로 미리 제작해둔 SignUpSchema에 연결
    resolver: zodResolver(SignUpSchema),
  });

  // 실시간 입력값 가져오기
  const values = watch();

  // 전체 입력값이 올바르게 입력되었는지 검사 => 버튼 활성화에 쓰임
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

  // 주소 검색창 상태 관리
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  // 인증번호 입력 칸 상태 관리
  const [showVerificationInput, setshowVerificationInput] = useState(false);

  // 주소 검색 버튼 클릭 시 검색창 활성화
  const handleAddressSearch = () => {
    setIsAddressOpen(true);
  };

  // 주소 검색 완료 후 입력 필드 없데이트
  const handleAddressComplete = ({ address, zonecode }) => {
    setValue('mainAddress', address);
    setValue('zipAddress', zonecode);
    console.log('주소 설정 완료:', address, zonecode);
    setIsAddressOpen(false);
  };

  // 이용약관 동의 상태 관리
  const [agreements, setAgreements] = useState({
    all: false,
    termsRequired: false,
    privacyRequired: false,
    marketingOptional: false,
  });

  // 모든 약관 동의 버튼 클릭 시 상태 업데이트
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

  // 개별 약관 동의 체크박스 클릭 시 상태 업데이트
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
    <>
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
          <VerificationCodeInput
            register={register}
            errors={errors}
            watch={watch}
          />
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
    </>
  );
};

export default SignUpForm;
