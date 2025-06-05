import { useMutation, useQuery } from '@tanstack/react-query';
import {
  updateDelivery,
  postDelivery,
  getDeliveryDetail,
  getDeliveryAll,
  deleteDelivery,
} from '../api/delivery';

export const useUpdateDelivery = () => {
  return useMutation({
    mutationFn: ({ reviewId, productId, title, content, starCount }) =>
      updateDelivery(reviewId, productId, title, content, starCount),
    onSuccess: (data) => {
      alert('배송 정보 업데이트 성공');
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '배송 정보 업데이트 실패');
    },
  });
};

export const usePostDelivery = () => {
  return useMutation({
    mutationFn: (productId) => postDelivery(productId),
    onSuccess: (data) => {
      alert('배송 정보 등록 성공');
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '배송 정보 등록 실패');
    },
  });
};

export const useGetDeliveryDetail = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['deliveryDetail'],
    queryFn: (id) => getDeliveryDetail(id),
    onSuccess: (data) => {
      console.log('배송 정보 상세 조회 성공:', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '배송 정보 상세 조회 실패');
    },
  });

  return { data, isLoading, error };
};

export const useGetDeliveryAll = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['deliveryAll'],
    queryFn: () => getDeliveryAll(),
    onSuccess: (data) => {
      console.log('모든 배송 정보 조회 성공:', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '모든 배송 정보 조회 실패');
    },
    refetchOnWindowFocus: false, // 창이 포커스될 때 자동으로 새로고침하지 않음
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선하다고 간주
  });

  return { data, isLoading, error };
};

export const useDeleteDelivery = () => {
  return useMutation({
    mutationFn: (id) => deleteDelivery(id),
    onSuccess: (data) => {
      alert('배송 정보 삭제 성공');
      console.log('응답 :', data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || '배송 정보 삭제 실패');
    },
  });
};
