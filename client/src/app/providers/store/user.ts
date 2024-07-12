import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import { AuthResponse, User } from '@/shared/types';
import { AuthApi } from '@/shared/api';

interface LoginData {
  email: string;
  password: string;
}

export class UserStore {
  user = {} as User;
  isAuth = false;
  isLoading = false;

  private authLock: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.login = this.login.bind(this);
    this.registration = this.registration.bind(this);
    this.logout = this.logout.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: User) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login({ email, password }: LoginData) {
    try {
      const response = await AuthApi.login({ email, password });

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message || e.message);
    }
  }

  async registration({ email, password }: LoginData) {
    try {
      const response = await AuthApi.registration({ email, password });

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message || e.message);
    }
  }

  async logout() {
    try {
      const response = await AuthApi.logout();
      this.setAuth(false);
      this.setUser({} as User);
      window.location.reload();
    } catch (e: any) {
      console.log(e.response?.data?.message || e.message);
    }
  }

  async checkAuth() {
    if (this.authLock) return;

    this.authLock = true;
    try {
      const response = await axios.get<AuthResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          withCredentials: true,
        },
      );

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message || e.message);
    } finally {
      this.authLock = false;
    }
  }
}
