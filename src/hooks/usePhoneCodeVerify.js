import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { phoneCodeVerify } from '../api/phoneCodeVerify';

// 휴대폰 인증번호 검증 api 호출
export const usePhoneCodeVerify = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (phoneNumber, verificationCode, purpose) =>
      phoneCodeVerify(phoneNumber, verificationCode, purpose),
    onSuccess: (data) => {
      alert('인증번호 검증 성공');
      console.log('응답 : ', data);
      if (data.code === 200) {
        navigate('/');
      }
    },
    onError: (error) => {
      alert(error.response?.data?.message || '인증번호 검증 실패');
    },
  });
};
