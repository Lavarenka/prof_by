import { useQuery } from '@tanstack/react-query';
import { getContent } from '../API/api'; 

export const useContent = () => {
  return useQuery({
    queryKey: ['contents'],
    queryFn: getContent,
  });
};