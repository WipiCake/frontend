import { PRODUCT_GETSELLING_URL } from '../constants/endpoint';
import api from './axiosInstance';

export const productGetSelling = async () => {
  try {
    const response = await api.get(`${PRODUCT_GETSELLING_URL}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
