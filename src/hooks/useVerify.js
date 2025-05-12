import { useMutation } from '@tanstack/react-query';
import { requestPhoneVerification } from '../api/auth';

export const useSendPhoneVerification = () => {
  return useMutation({
    mutationFn: requestPhoneVerification,
    onSuccess: (data) => {
      console.log('인증 요청 성공', data);
    },
    onError: (error) => {
      console.log('인증 요청 실패', error);
    },
  });
};
