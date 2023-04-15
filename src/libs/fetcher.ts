import axios from 'axios';
import { API_URL, API_KEY, TOKEN } from '../constants/enviroment';

export const generateUrl = (URL: string) => `${API_URL}${URL}&key=${API_KEY}&token=${TOKEN}`;

const fetcher = (URL: string) => {
    const endpoint = generateUrl(URL);
    return axios.get(endpoint).then((res) => res.data);
}

export default fetcher;