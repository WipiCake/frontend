import { EMAIL_FINDID_URL, EMAIL_RESETPW_URL } from '../constants/endpoint';
import api from './axiosInstance';

export const emailCodeVerify = async (fromEmail, verificationCode, purpose) => {
  try {
    const response = await api.post(
      `${purpose === 'FIND-ID' ? EMAIL_FINDID_URL : EMAIL_RESETPW_URL}`,
      {
        fromEmail,
        verificationCode,
        purpose,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
