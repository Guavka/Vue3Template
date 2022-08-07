import axios from 'axios';
import { type UserModule } from '~/types'

export const install: UserModule = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    params: {

    },
  });
}