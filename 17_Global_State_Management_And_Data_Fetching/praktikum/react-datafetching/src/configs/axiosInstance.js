import axios from 'axios';
import CONST from '../utils/constants';

const config = {
  baseURL: CONST.TODO_API_BASE_URL,
  headers: {
    'x-hasura-admin-secret': CONST.TODO_API_KEY,
  },
};

export const axiosInstance = axios.create(config);
