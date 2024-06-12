"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "AUTH";

export const removeAuthCookie = async () => {
  cookies().delete(COOKIE_NAME);
};

export const setAuthCookie = (token: string) => {
  const expiresIn = 60 * 60 * 24 * 7;
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: expiresIn,
    sameSite: "strict",
    path: "/",
  });
};

export const getAuthCookie = () => cookies().get(COOKIE_NAME);
