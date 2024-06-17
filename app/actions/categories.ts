"use server";

import * as handler from "./handler";

export const getAll = async (cache: string = "no-store") =>
  await handler.getAll("categories", cache);

export const getPaginated = async (page: number, limit: number) =>
  await handler.getPaginated("categories", page, limit);

export const edit = async (cache: string = "no-store") => {
  const res = await fetch(`${process.env.URL}/api/categories/edit`, {
    method: "PUT",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
