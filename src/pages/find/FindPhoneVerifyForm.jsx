import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { verificationCodeSchema } from '../../utils/zod';
import { usePhoneCodeVerify } from './../../hooks/usePhoneCodeVerify';

const FindPhoneVerifyForm = ({ phone }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verificationCodeSchema),
    defaultValues: {
      findMethod: 'phone',
    },
  });

  // 인증번호 검증 훅 가져오기
  const phoneVerifyMutation = usePhoneCodeVerify();

  // 인증번호 검증 폼 제출
  const OnSubmit = (data) => {
    phoneVerifyMutation.mutate({
      phoneNumber: phone,
      verificationCode: data.verificationCode,
      purpose: 'FIND-ID',
    });
  };
  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className="flex flex-col items-center justify-center gap-[4rem]"
    >
      <div className="w-full">
        <input
          placeholder="인증번호를 입력하세요"
          className="h-[5.7rem] w-full border-b border-black-20 text-k-16-Regular"
          {...register('verificationCode')}
        />
        {errors.verificationCode && (
          <p className="text-red-500">{errors.verificationCode.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="h-[5.6rem] w-full bg-pink-30 text-k-16-Medium text-black-10"
      >
        확인
      </button>
    </form>
  );
};

export default FindPhoneVerifyForm;
