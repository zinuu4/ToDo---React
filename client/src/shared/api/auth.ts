import axios from 'axios';

interface AuthProps {
  email: string;
  password: string;
}

export const registration = async ({ email, password }: AuthProps) => {
  try {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registration`, {
        email,
        password,
      })
      .then(() => {
        // window.location.reload();
      });
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
      .then(() => {
        // window.location.reload();
      });
  } catch (error) {
    console.error('Login error:', error);
  }
};
