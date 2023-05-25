import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchDogFact = async (): Promise<{
  id: string;
  content: string;
}> => {
  const { data } = await axios.get<{
    data: { id: string; type: string; attributes: { body: string } }[];
  }>('https://dogapi.dog/api/v2/facts?limit=1');
  const responseContent = data?.data?.[0];

  if (!responseContent) {
    throw new Error('No content in response');
  }
  return {
    id: responseContent.id,
    content: responseContent.attributes.body,
  };
};

export const useDogFact = () => {
  return useQuery({
    queryKey: ['dog-fact'],
    queryFn: fetchDogFact,
    enabled: false,
  });
};
