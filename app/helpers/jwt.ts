import { jwtVerify, SignJWT } from "jose";

type Payload = {
  id: number;
  email: string;
};

const getJwtSecretKey = () => {
  const secret = process.env.NEXT_PUBLIC_ENV_JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
};

export const verifyJwtToken = async (token: string) => {
  try {
    return await jwtVerify(token, getJwtSecretKey());
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signJwtToken = async (payload: Payload): Promise<string> => {
  const secret = process.env.NEXT_PUBLIC_ENV_JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  const secretEncoded = new TextEncoder().encode(secret);
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secretEncoded);
};
