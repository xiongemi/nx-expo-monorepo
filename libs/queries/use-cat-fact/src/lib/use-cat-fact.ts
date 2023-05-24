import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchCatFact = async (): Promise<string> => {
  const { data } = await axios.get('https://catfact.ninja/fact');
  return data.fact;
};

export const useCatFact = () => {
  return useQuery({
    queryKey: ['cat-fact'],
    queryFn: fetchCatFact,
    enabled: false,
  });
};
