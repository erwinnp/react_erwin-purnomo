import axios from 'axios';
import CONST from '../utils/constants';

console.log(CONST);
const configAPI = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    'x-hasura-admin-secret': CONST.BASE_API_KEY,
  },
};

const axiosInstance = axios.create(configAPI);
export default axiosInstance;
