"use server";

import { cookies } from "next/headers";
import * as handler from "./handler";
import { setSession } from "./session";
import { redirect } from "next/dist/server/api-utils";

type data = {
  email: string;
  password: string;
};

export const signup = async (formData: data) => {
  const res = await fetch(`${process.env.URL}/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return res.json();
};

export const login = async (formData: data) => {
  const res = await fetch(`${process.env.URL}/api/users/login`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  const user = await res.json();
  setSession(user);
  return { email: user?.email, redirectUrl: user?.redirectUrl };
};

export const logout = () => {
  cookies().set("session", "", { expires: new Date(0) });
};

export const getAll = async (cache: RequestCache = "no-store") =>
  await handler.getAll("users", cache);

export const getPaginated = async (page: number, limit: number) =>
  await handler.getPaginated("users", page, limit);
