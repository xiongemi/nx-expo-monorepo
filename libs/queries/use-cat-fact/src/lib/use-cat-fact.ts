import { useQuery } from '@tanstack/react-query';

export const fetchCatFact = async (): Promise<string> => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  return data.fact;
};

export const useCatFact = () => {
  return useQuery({
    queryKey: ['cat-fact'],
    queryFn: fetchCatFact,
    enabled: false,
  });
};
