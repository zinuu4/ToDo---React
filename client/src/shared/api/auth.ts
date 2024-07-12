import { AxiosResponse } from 'axios';

import { $api } from './common';
import { AuthResponse } from '../types';

interface AuthProps {
  email: string;
  password: string;
}

export class AuthApi {
  static registration = async ({
    email,
    password,
  }: AuthProps): Promise<AxiosResponse<AuthResponse>> => {
    return await $api.post('/auth/registration', {
      email,
      password,
    });
  };

  static login = async ({
    email,
    password,
  }: AuthProps): Promise<AxiosResponse<AuthResponse>> => {
    return await $api.post('/auth/login', {
      email,
      password,
    });
  };

  static logout = async () => {
    return await $api.post('/auth/logout');
  };
}
