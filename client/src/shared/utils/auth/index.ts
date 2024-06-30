import jwt from 'jsonwebtoken';

export const verifyToken = (token: string | undefined) => {
  if (!token || !process.env.JWT_SECRET) {
    return null;
  }
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};
