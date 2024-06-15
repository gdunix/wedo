"use server";
import { cookies } from "next/headers";
import { setSession } from "./session";

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
  return { email: user?.email };
};

export const logout = () => {
  cookies().set("session", "", { expires: new Date(0) });
};
