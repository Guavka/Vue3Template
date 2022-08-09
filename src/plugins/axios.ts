import axios from 'axios';
import { type UserPlugin } from '~/types'

export const install: UserPlugin = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    params: {

    },
  });
}