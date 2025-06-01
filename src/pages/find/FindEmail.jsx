import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema } from '../../utils/zod';
import { useState } from 'react';
import { useEmailCodeIssue } from './../../hooks/useEmailCodeIssue';
import FindEmailVerifyForm from './FIndEmailVerifyForm';
import { useActiveTabStore, useFindStore } from '../../lib/zustand/findstore';

const FindEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(emailSchema), mode: 'onChange' });

  // 텍스트 변경하는 기능
  const { submit, Click } = useFindStore();

  const { activeTab } = useActiveTabStore();

  const [isClicked, setIsClicked] = useState(false);

  // 인증번호 발급 훅 가져오기
  const emailCode = useEmailCodeIssue();

  // 이메일 담아서 전달해줘야됨
  const [email, setEmail] = useState('');

  // 이메일로 인증번호 발급받기
  const OnSubmit = (data) => {
    if (isClicked) return;
    emailCode.mutate({
      toEmail: data.email,
      purpose: `${activeTab === 'id' ? 'FIND-ID' : 'FIND-PW'}`,
    });
    Click();
    console.log(data);
    setEmail(data.email);
    setIsClicked(true);
  };

  return (
    <div>
      {submit ? (
        <FindEmailVerifyForm email={email} />
      ) : (
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="pb-[4rem]">
            <input
              {...register('email')}
              placeholder="이메일을 입력하세요"
              className="h-[5.7rem] w-full border-b border-black-20 text-k-16-Regular"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
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

export default FindEmail;
