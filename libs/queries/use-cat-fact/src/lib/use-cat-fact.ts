import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchCatFact = async (): Promise<string | void> => {
  const response = await axios.get('https://catfact.ninja/fact');
  return response.data.fact;
};

export const useCatFact = () => {
  return useQuery({
    queryKey: ['cat-fact'],
    queryFn: fetchCatFact,
    enabled: false,
    retry: false,
  });
};
