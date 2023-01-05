import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCatFact = async () => {
    const { data } = await axios.get('https://meowfacts.herokuapp.com/');
    return data;
};

export const useCatFact = () => useQuery('cat-facts', fetchCatFact);
export default useCatFact;