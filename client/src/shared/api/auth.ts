import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import Cookies from 'js-cookie';

import { useLocalStorage } from '@/shared/hooks';

interface AuthProps {
  email: string;
  password: string;
}

interface DecodedToken extends JwtPayload {
  id: string;
}

export const registration = async ({ email, password }: AuthProps) => {
  try {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registration`, {
        email,
        password,
      })
      .then(() => {});
  } catch (error) {
    console.error('Registration error:', error);
  }
};

export const login = async ({ email, password }: AuthProps) => {
  try {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      })
      .then(({ data }) => {
        Cookies.set('token', data.token, { expires: 1 });
        const decodedToken: DecodedToken = jwtDecode(data.token);
        useLocalStorage.setItem('userID', decodedToken.id);
      });
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const getUser = async ({ id }: { id: string }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/getUser`,
      { id },
    );
    return response.data;
  } catch (error) {
    console.error('Error while getting user', error);
  }
};
