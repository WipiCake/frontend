import axios from '../lib/axios';

export const requestPhoneVerification = async (phoneNumber) => {
  console.log('📤 보낼 전화번호:', phoneNumber);
  const response = await axios.post('/sms/verify/find-id', {
    phoneNumber: phoneNumber,
    verificationCode: '',
    purpose: 'findId',
  });

  return response.data;
};
