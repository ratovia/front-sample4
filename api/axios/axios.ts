import {
  UserApi,
} from './api';

import { Configuration } from './configuration';

import axios from 'axios';

// const { API_URL } = process.env;
const MOCK_URL = 'http://localhost:8004'

const config = new Configuration({
  basePath: MOCK_URL,
});

const axiosInstance = axios.create({
  baseURL: MOCK_URL,
});

const userApi = new UserApi(config, '', axiosInstance);

export {
  userApi
};
