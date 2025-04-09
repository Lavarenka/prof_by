import { useQuery } from '@tanstack/react-query';
import { getContacts } from '../API/api';

export const useContacts = () => {
    return useQuery({
        queryKey: ['contacts'],
        queryFn: getContacts,
    });
};
