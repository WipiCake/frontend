import { useMutation } from '@tanstack/react-query';
import { phoneCodeIssue } from '../api/phoneCodeIssue';

// 휴대폰 번호로 인증번호 발급받는 api hook
export const usePhoneCodeIssue = () => {
  return useMutation({
    mutationFn: (toPhoneNumber, purpose) =>
      phoneCodeIssue(toPhoneNumber, purpose),
    onSuccess: (data) => {
      alert(`인증번호 발송 성공`);
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '인증번호 발송 실패');
    },
  });
};
