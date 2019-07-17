import axios from 'axios';

import { getToken } from './JwtService';

const url = 'http://localhost:5000';

export const HTTP = axios.create({
    baseURL: url
});

HTTP.interceptors.request.use(
    config => {
        const token = getToken();
        const authorizationJwt = token ? `Bearer ${token}` : '';
        config.headers.authorization = authorizationJwt;
        return config;
    },
    error => Promise.reject(error)
);
