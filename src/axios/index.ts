import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://challenge-api.napper.app',
});
