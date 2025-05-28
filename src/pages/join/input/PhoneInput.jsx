import { useMutation } from '@tanstack/react-query';
import api from '../../../api/axiosInstance';
import { SMS_CODE_URL } from '../../../constants/endpoint';
import Label from './Label';

const PhoneInput = ({ register, errors, setshowVerificationInput, watch }) => {
  // 입력한 휴대폰 번호 실시간으로 가져옴
  const phone = watch('phone');

  // React-query의 useMutation을 이용해 인증번호 요청
  const mutation = useMutation({
    // api 요청
    mutationFn: async () => {
      const response = await api.post(`${SMS_CODE_URL}`, {
        toPhoneNumber: phone,
        purpose: 'AUTH',
      });
      return response.data;
    },
    onSuccess: (data) => {
      alert('인증번호가 전송되었습니다.');
      console.log('응답', data);
      // 인증번호 입력 필드 활성화
      setshowVerificationInput(true);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '인증번호 요청에 실패했습니다');
    },
  });

  // 인증번호 요청 버튼 클릭시 실행
  const handleClick = () => {
    if (!phone || phone.length < 10) {
      alert('📵 유효한 휴대폰 번호를 입력해주세요.');
      return;
    }
    console.log('📱 전화번호:', phone);
    mutation.mutate();
  };

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <Label>휴대폰</Label>
        <div>
          <div className="flex gap-[2rem]">
            <input
              className="h-[5.6rem] w-[23.5rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
              type="text"
              placeholder="숫자만 입력해주세요"
              {...register('phone')}
            />
            <div className="flex border border-black-30">
              <button
                type="button"
                onClick={() => handleClick()}
                className="flex w-[15.7rem] items-center justify-center gap-[1.2rem] text-k-16-Medium text-black-30"
              >
                인증번호 받기
              </button>
            </div>
          </div>
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
