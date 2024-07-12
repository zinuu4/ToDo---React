import { jwtVerify } from 'jose';

export const verifyToken = async (token: string | undefined) => {
  if (!token || !process.env.JWT_ACCESS_SECRET) {
    return null;
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.log(err);

    return null;
  }
};
