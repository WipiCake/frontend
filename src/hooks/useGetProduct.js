import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProduct = () => {
  return useQuery({
    queryKey: ['Product'],
    queryFn: async () => {
      const response = await axios.get(
        'http://cat-informed-newt.ngrok-free.app/product/getSelling',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      console.log('응답 전체 : ', response);

      return response.data.data;
    },
  });
};
