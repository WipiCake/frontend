import { EMAIL_CODE_URL } from '../constants/endpoint';
import api from './axiosInstance';

export const emailCodeIssue = async (toEmail, purpose) => {
  try {
    const response = await api.post(`${EMAIL_CODE_URL}`, {
      toEmail,
      purpose,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
