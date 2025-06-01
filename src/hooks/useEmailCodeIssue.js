import { useMutation } from '@tanstack/react-query';
import { emailCodeIssue } from '../api/emailCodeIssue';

export const useEmailCodeIssue = () => {
  return useMutation({
    mutationFn: (toEmail, purpose) => emailCodeIssue(toEmail, purpose),
    onSuccess: (data) => {
      alert('이메일로 인증번호 발송 성공');
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '인증번호 발송 실패');
    },
  });
};
