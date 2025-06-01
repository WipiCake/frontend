import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { emailCodeVerify } from '../api/emailCodeVerify';

export const useEmailCodeVerify = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (fromEmail, verificationCode, purpose) =>
      emailCodeVerify(fromEmail, verificationCode, purpose),
    onSuccess: (data) => {
      alert('인증번호 인증 성공');
      console.log('응답 :', data);
      if (data.code === 200) {
        navigate('/');
      }
    },
    onError: (error) => {
      alert(error.response?.data?.message);
    },
  });
};
