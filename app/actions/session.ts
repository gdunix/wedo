import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as JWT from "@/helpers/jwt";
import { Payload, User } from "@/types";

const EXPIRES = new Date(Date.now() + 24 * 60 * 60 * 1000);

const isTokenExpired = (payload: Payload) => {
  try {
    const currentTime = new Date();
    return payload.expires < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

export const updateSession = async (session: string): Promise<NextResponse> => {
  const res = NextResponse.next();
  const parsed = await JWT.verifyJwt(session);
  const payload = parsed?.payload;
  const isExpired = payload && isTokenExpired(payload);
  if (isExpired) {
    payload.expires = EXPIRES;
    res.cookies.set({
      name: "session",
      value: await JWT.signJwtToken(payload),
      httpOnly: true,
      expires: EXPIRES,
    });
  }

  return res;
};

export const setSession = async (user: User) => {
  const payload = { user, expires: EXPIRES };
  const session = await JWT.signJwtToken(payload);

  // Save the session in a cookie
  cookies().set("session", session, {
    expires: EXPIRES,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
  });
};

export const getSession = async () => {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await JWT.verifyJwt(session);
};

export const getUserData = async () => {
  const session = await getSession();
  const role = session?.payload?.user?.role;
  const isLoggedIn = !!session;
  const isAdmin = role === "admin";

  return { session, role, isLoggedIn, isAdmin };
};
