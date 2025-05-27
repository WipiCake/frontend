import { useMutation } from '@tanstack/react-query';
import { SMS_AUTH_URL } from '../../../constants/endpoint';
import api from '../../../api/axiosInstance';
import Label from './Label';

const VerificationCodeInput = ({ register, errors, watch }) => {
  // 입력한 인증번호 실시간으로 가져옴
  const verificationCode = watch('verificationCode');
  // 입력한 핸드폰 번호 실시간으로 가져옴
  const phone = watch('phone');

  // React-query의 useMutation 사용해 인증번호 검증
  const mutation = useMutation({
    // api 호출
    mutationFn: async () => {
      const response = await api.post(`${SMS_AUTH_URL}`, {
        phoneNumber: phone,
        verificationCode: verificationCode,
        purpose: 'AUTH',
      });
      return response.data;
    },
    onSuccess: (data) => {
      alert('인증번호 검증 성공');
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '❌ 인증번호 검증 실패');
    },
  });

  // 인증번호 검증 버튼 클릭시 실행
  const handleVerifyClick = () => {
    if (!verificationCode || verificationCode.length !== 6) {
      alert('올바른 인증번호를 입력해주세요');
      return;
    }
    console.log('인증번호 :', verificationCode);
    mutation.mutate();
  };

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <Label>인증번호</Label>

        <div className="flex gap-[2rem]">
          <input
            type="text"
            placeholder="인증번호를 입력해주세요"
            className="h-[5.6rem] w-[23.7rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
            {...register('verificationCode')}
          />
          <div className="flex border border-black-30">
            <button
              type="button"
              onClick={handleVerifyClick}
              className="flex w-[15.7rem] items-center justify-center gap-[1.2rem] border border-black-30 text-k-16-Medium text-black-30"
            >
              인증번호 확인
            </button>
          </div>
        </div>
        {errors.verificationCode && (
          <p className="text-red-500">{errors.verificationCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default VerificationCodeInput;
