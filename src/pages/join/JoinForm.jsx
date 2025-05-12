import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import RedStar from '../../assets/img/RedStar.svg';
import AddressSearch from './AddressSearch.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../utils/zod.js';
import ColorRightArrow from '../../assets/img/ColorRightArrow.svg';
import check from '../../assets/img/check.svg';
import checked from '../../assets/img/checked.svg';
import Searach from '../../assets/img/Search.svg';
import axios from 'axios';

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
    formState: { errors },
    // watch,
    setValue,
    clearErrors,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const [isAddressOpen, setIsAddressOpen] = useState(false);

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
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            아이디
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="text"
              placeholder="아이디를 입력해주세요"
              {...register('username')}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
        </div>

        {/* 비밀번호 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            비밀번호
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register('password')}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            비밀번호 확인
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        {/* 이름 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            이름
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="text"
              placeholder="이름을 입력해주세요"
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>

        {/* 이메일 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            이메일
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

        {/* 휴대폰 번호 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            휴대폰
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div>
            <input
              className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="text"
              placeholder="숫자만 입력해주세요"
              {...register('phone')}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        </div>

        {/* 주소 검색 */}
        <div className="flex w-full items-start justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            주소
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div className="flex w-[41.4rem] flex-col gap-[1.6rem]">
            <div className="flex justify-between">
              <input
                className="h-[5.6rem] w-[19.8rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
                placeholder="우편번호"
                {...register('zipAddress')}
                readOnly
              />
              <button
                className="flex w-[19.8rem] items-center justify-center gap-[1.2rem] bg-pink-40 text-k-16-Medium text-bg-10"
                type="button"
                onClick={handleAddressSearch}
              >
                주소 검색
                <img
                  className="2-[2.4rem] h-[2.4rem]"
                  src={Searach}
                  alt="돋보기 아이콘"
                />
              </button>
            </div>

            <div>
              <input
                className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
                placeholder="기본 주소"
                {...register('mainAddress')}
                readOnly
              />
            </div>

            <div>
              <input
                className="h-[5.6rem] w-[41.3rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
                placeholder="나머지 주소 (선택)"
                {...register('addressDetail')}
              />
            </div>
          </div>
          {isAddressOpen && (
            <AddressSearch onComplete={handleAddressComplete} />
          )}

          {errors.address && <p>{errors.address.message}</p>}
        </div>

        {/* 성별 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            성별
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>

          <div className="flex h-[5.6rem] flex-col justify-center">
            <div className="flex w-[41.4rem] gap-[6.4rem]">
              <label className="flex items-center gap-[0.8rem] text-k-16-Regular">
                <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-40">
                  <input
                    type="radio"
                    value="male"
                    {...register('gender')}
                    className="h-[1rem] w-[1rem] appearance-none rounded-full checked:border-transparent checked:bg-pink-40"
                  />
                </div>
                남자
              </label>
              <label className="flex items-center gap-[0.8rem] text-k-16-Regular">
                <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-40">
                  <input
                    type="radio"
                    value="female"
                    {...register('gender')}
                    className="h-[1rem] w-[1rem] appearance-none rounded-full checked:border-transparent checked:bg-pink-40"
                  />
                </div>
                여자
              </label>
            </div>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
        </div>

        {/* 생년월일 */}
        <div className="flex w-full items-center justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            생년월일
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>
          <div className="flex flex-col">
            <div className="flex h-[5.6rem] w-[41.4rem]">
              <input
                type="text"
                placeholder="YYYY"
                className="w-[19.6rem] border border-black-30 text-center text-k-16-Regular"
                {...register('birthYear')}
              />
              <input
                type="text"
                placeholder="MM"
                className="w-[10.8rem] border-y border-black-30 text-center text-k-16-Regular"
                {...register('birthMonth')}
              />
              <input
                type="text"
                placeholder="DD"
                className="w-[10.8rem] border border-black-30 text-center text-k-16-Regular"
                {...register('birthDay')}
              />
            </div>

            {/* ✅ 에러 메시지는 여기 하나만! */}
            {(errors.birthYear || errors.birthMonth || errors.birthDay) && (
              <p>생년월일을 정확히 입력해주세요. (예: 1990 / 05 / 12)</p>
            )}
          </div>
        </div>

        {/* ✅ 이용약관 동의 */}
        <div className="flex w-full items-start justify-between">
          <label className="flex gap-[0.4rem] text-k-16-Medium">
            이용약관 동의
            <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
          </label>

          <div className="flex w-[41.4rem] flex-col gap-[2rem]">
            {/* 전체 동의 */}
            <div
              className="flex cursor-pointer items-center gap-[2rem]"
              onClick={handleAllAgree}
            >
              <img
                src={agreements.all ? checked : check}
                alt="전체 동의 체크박스"
                className="h-[2.4rem] w-[2.4rem]"
              />
              <p className="text-k-18-Medium text-black-50">전체 동의합니다.</p>
            </div>

            {/* 필수 약관 */}
            <div className="flex items-center justify-between">
              <div
                className="flex cursor-pointer items-center gap-[2rem]"
                onClick={() => handleCheckboxChange('termsRequired')}
              >
                <img
                  src={agreements.termsRequired ? checked : check}
                  alt="약관 동의 체크박스"
                  className="h-[2.4rem] w-[2.4rem]"
                />
                <p className="text-k-15-Regular text-black-50">
                  이용약관 동의 (필수)
                </p>
              </div>
              <a
                href="#"
                className="flex items-center text-k-15-Regular text-pink-50"
              >
                약관 보기 <img src={ColorRightArrow} alt="오른쪽 화살표" />
              </a>
            </div>

            {/* 개인정보 동의 */}
            <div className="flex items-center justify-between">
              <div
                className="flex cursor-pointer items-center gap-[2rem]"
                onClick={() => handleCheckboxChange('privacyRequired')}
              >
                <img
                  src={agreements.privacyRequired ? checked : check}
                  alt="개인정보 동의 체크박스"
                  className="h-[2.4rem] w-[2.4rem]"
                />
                <p className="text-k-15-Regular text-black-50">
                  개인정보 수집 및 이용 동의 (필수)
                </p>
              </div>
              <a
                href="#"
                className="flex items-center text-k-15-Regular text-pink-50"
              >
                약관 보기 <img src={ColorRightArrow} alt="오른쪽 화살표" />
              </a>
            </div>

            {/* 선택 동의 */}
            <div
              className="flex cursor-pointer items-center gap-[2rem] py-3"
              onClick={() => handleCheckboxChange('marketingOptional')}
            >
              <img
                src={agreements.marketingOptional ? checked : check}
                alt="마케팅 동의 체크박스"
                className="h-[2.4rem] w-[2.4rem]"
              />
              <p className="text-k-15-Regular text-black-50">
                할인쿠폰 등 혜택 및 정보 수신 동의 (선택)
              </p>
            </div>

            {/* react-hook-form용 hidden input */}
            <input type="hidden" {...register('termsRequired')} />
            <input type="hidden" {...register('privacyRequired')} />
            {errors.termsRequired && (
              <p className="text-sm text-red">{errors.termsRequired.message}</p>
            )}
            {errors.privacyRequired && (
              <p className="text-sm text-red">
                {errors.privacyRequired.message}
              </p>
            )}
          </div>
        </div>

        <button
          className="mx-auto h-[5.6rem] w-[41.4rem] bg-pink-40 text-k-16-Regular text-bg-10"
          type="submit"
        >
          회원가입
        </button>
      </form>
      {console.log('❗ errors 상태 확인:', errors)}
    </div>
  );
};

export default SignUpForm;
