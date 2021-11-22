import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IBM_CLOUD_FUNCTIONS_API_URL || '/api',
});
