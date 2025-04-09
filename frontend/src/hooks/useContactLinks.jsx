import { useQuery } from '@tanstack/react-query';
import { getContactLinks } from '../API/api'; 


export const useContactLinks = () => {
    return useQuery({
      queryKey: ['contactLinks'],
      queryFn: getContactLinks,

    });
  };