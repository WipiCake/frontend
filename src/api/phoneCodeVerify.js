import { SMS_FINDID_URL, SMS_RESETPW_URL } from '../constants/endpoint';
import api from './axiosInstance';

// 휴대폰 번호로 발급받은 인증번호 검증 api
export const phoneCodeVerify = async (
  phoneNumber,
  verificationCode,
  purpose,
) => {
  try {
    const response = await api.post(
      `${purpose === 'FIND-ID' ? SMS_FINDID_URL : SMS_RESETPW_URL}`,
      {
        phoneNumber,
        verificationCode,
        purpose,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
