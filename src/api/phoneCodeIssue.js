import { SMS_CODE_URL } from '../constants/endpoint';
import api from './axiosInstance';

// 휴대폰 번호로 인증번호 발급받는 api
export const phoneCodeIssue = async (toPhoneNumber, purpose) => {
  try {
    const response = await api.post(`${SMS_CODE_URL}`, {
      toPhoneNumber,
      purpose,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
