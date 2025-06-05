import api from './axiosInstance';
import {
  DELIVERY_UPDATE_URL,
  DELIVERY_REGISTER_URL,
  DELIVERY_GETDETAIL_URL,
  DELIVERY_GETALL_URL,
  DELIVERY_DELETE_URL,
} from '../constants/endpoint';

export const updateDelivery = async ({
  reviewId,
  productId,
  title,
  content,
  starCount,
}) => {
  try {
    const response = await api.post(`${DELIVERY_UPDATE_URL}`, {
      reviewId,
      productId,
      title,
      content,
      starCount,
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const postDelivery = async (productId) => {
  try {
    const response = await api.post(`${DELIVERY_REGISTER_URL}`, {
      productId,
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDeliveryDetail = async (id) => {
  try {
    const response = await api.get(`${DELIVERY_GETDETAIL_URL}/${id}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDeliveryAll = async () => {
  try {
    const response = await api.get(`${DELIVERY_GETALL_URL}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteDelivery = async (id) => {
  try {
    const response = await api.delete(`${DELIVERY_DELETE_URL}/${id}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
