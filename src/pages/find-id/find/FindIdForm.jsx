import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { findIdSchema } from '../../../utils/zod';
import { useSendPhoneVerification } from '../../../hooks/useVerify';

const FindIdForm = () => {
  const [findMethod, setFindMethod] = useState('phone'); // 'phone' 또는 'email'

  const { mutate: sendPhoneVerification } = useSendPhoneVerification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(findIdSchema),
    defaultValues: {
      findMethod: 'phone',
    },
  });

  const onSubmit = (data) => {
    if (data.findMethod === 'phone') {
      sendPhoneVerification(data.phone);
    } else if (data.findMethod === 'email') {
      console.log('이메일로 찾기:', data.email);
    }

    console.log('🟢 onSubmit 호출됨', data);
  };

  useEffect(() => {
    console.log('🔍 errors:', errors);
  }, [errors]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-[4rem]"
      >
        <div className="flex gap-[6.4rem] pb-[0.8rem]">
          <label className="flex cursor-pointer items-center gap-[0.8rem]">
            <div className="flex items-center justify-center">
              <input
                type="radio"
                {...register('findMethod')}
                value="phone"
                name="findMethod"
                checked={findMethod === 'phone'}
                onChange={() => {
                  setFindMethod('phone');
                  setValue('email', '');
                }}
                className="absolute opacity-0"
              />
              <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-30">
                {findMethod === 'phone' && (
                  <div className="h-[1rem] w-[1rem] rounded-full bg-pink-30"></div>
                )}
              </div>
            </div>
            <span className="text-k-15-Regular">휴대폰으로 찾기</span>
          </label>

          <label className="flex cursor-pointer items-center gap-[0.8rem]">
            <div className="flex items-center justify-center">
              <input
                type="radio"
                {...register('findMethod')}
                value="email"
                name="findMethod"
                checked={findMethod === 'email'}
                onChange={() => {
                  setFindMethod('email');
                  setValue('phone', '');
                }}
                className="absolute opacity-0"
              />
              <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-pink-30">
                {findMethod === 'email' && (
                  <div className="h-[1rem] w-[1rem] rounded-full bg-pink-30"></div>
                )}
              </div>
            </div>
            <span className="text-k-15-Regular">이메일로 찾기</span>
          </label>
        </div>

        <div className="w-full">
          {findMethod === 'phone' && (
            <div>
              <input
                {...register('phone')}
                placeholder="휴대폰 번호를 입력하세요"
                className="h-[5.7rem] w-full border-b border-black-20 text-k-16-Regular"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          )}
          {findMethod === 'email' && (
            <div>
              <input
                {...register('email')}
                placeholder="이메일을 입력하세요"
                className="h-[5.7rem] w-full border-b border-black-20 text-k-16-Regular"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          )}
        </div>

        <button className="h-[5.6rem] w-full bg-pink-30 text-k-16-Medium text-black-10">
          다음
        </button>
      </form>
    </div>
  );
};

export default FindIdForm;
