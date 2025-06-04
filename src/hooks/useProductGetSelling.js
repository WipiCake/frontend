import { useQuery } from '@tanstack/react-query';
import { productGetSelling } from '../api/prodectGetSelling';

export const useGetProductSelling = () => {
  return useQuery({
    queryKey: ['product-get-selling'],
    queryFn: productGetSelling,
    staleTime: 1000 * 60 * 5,
  });
};
