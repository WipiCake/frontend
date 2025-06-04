import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { phoneSchema } from '../../utils/zod';
import { usePhoneCodeIssue } from '../../hooks/usePhoneCodeIssue';
import FindPhoneVerifyForm from './FindPhoneVerifyForm';
import { useState } from 'react';
import { useActiveTabStore, useFindStore } from '../../lib/zustand/findStore';

const FindPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(phoneSchema), mode: 'onChange' });

  // 텍스트 변경하는 기능
  const { submit, Click } = useFindStore();

  const { activeTab } = useActiveTabStore();

  const [isClicked, setIsClicked] = useState(false);

  // 인증번호 발급 훅 가져오기
  const phoneCode = usePhoneCodeIssue();

  const [phone, setPhone] = useState('');

  // 핸드폰 번호로 인증번호 발급받기
  const OnSubmit = (data) => {
    if (isClicked) return;
    phoneCode.mutate({
      toPhoneNumber: data.phone,
      purpose: `${activeTab === 'id' ? 'FIND-ID' : 'FIND-PW'}`,
    });
    Click();
    console.log(data);
    setPhone(data.phone);
    setIsClicked(true);
  };

  return (
    <div>
      {submit ? (
        <FindPhoneVerifyForm phone={phone} />
      ) : (
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="pb-[4rem]">
            <input
              {...register('phone')}
              placeholder="휴대폰 번호를 입력하세요"
              className="h-[5.7rem] w-full border-b border-black-20 text-k-16-Regular"
            />
            {errors.phone && (
              <p className="pt-[0.4rem] text-k-14-Regular text-red">
                {errors.phone.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isValid || isClicked}
            className={`h-[5.6rem] w-full text-k-16-Medium text-black-10 ${!isValid || isClicked ? 'cursor-not-allowed bg-black-20' : 'bg-pink-30'}`}
          >
            다음
          </button>
        </form>
      )}
    </div>
  );
};

export default FindPhone;
