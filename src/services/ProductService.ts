import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../utilities';

export const getAllProducts = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_PRODUCTS}`);
  return res;
};
