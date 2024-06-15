"use server";

export const getAll = async (cache: string = "no-store") => {
  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const edit = async (cache: string = "no-store") => {
  const res = await fetch(`${process.env.URL}/api/categories/edit`, {
    method: "PUT",
    cache,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
