"use server";

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
