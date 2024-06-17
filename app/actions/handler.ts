export const getPaginated = async (
  entity: string,
  page: number,
  limit: number
) => {
  const res = await fetch(`${process.env.URL}/api/${entity}/${page}/${limit}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getAll = async (url: string, cache: string = "no-store") => {
  const res = await fetch(`${process.env.URL}/api/${url}`, {
    cache,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
