import axios from 'axios';
import RedStar from '../../../assets/img/RedStar.svg';
import { useMutation } from '@tanstack/react-query';

const PhoneInput = ({ register, errors, setshowVerificationInput, watch }) => {
  const phone = watch('phone');
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        'https://cat-informed-newt.ngrok-free.app/sms/code/issue',
        {
          toPhoneNumber: phone,
          purpose: 'AUTH',
        },
      );
      return response.data;
    },
    onSuccess: (data) => {
      alert('인증번호가 전송되었습니다.');
      console.log('응답', data);
      setshowVerificationInput(true);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '인증번호 요청에 실패했습니다');
    },
  });

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
        <label className="flex gap-[0.4rem] text-k-16-Medium">
          휴대폰
          <img className="pb-[1.6rem]" src={RedStar} alt="필수입력 이미지" />
        </label>
        <div>
          <div className="flex gap-[2rem]">
            <input
              className="h-[5.6rem] w-[23.7rem] border border-black-30 pl-[1.6rem] text-k-16-Regular"
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
