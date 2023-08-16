import { useQuery } from '@tanstack/react-query';

export const fetchDogFact = async (): Promise<{
  id: string;
  content: string;
}> => {
  const response = await fetch('https://dogapi.dog/api/v2/facts?limit=1');
  const responseJson: {
    data: { id: string; type: string; attributes: { body: string } }[];
  } = await response.json();
  const responseContent = responseJson?.data?.[0];

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
