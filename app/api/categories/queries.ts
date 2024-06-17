import prisma from "@/api/prisma";

export const getCategories = async () =>
  await prisma.vendor_types.findMany({
    where: {
      enabled: true,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      img: true,
      rank: true,
      enabled: true,
    },
    orderBy: {
      rank: "asc",
    },
  });

export const getPaginatedCategories = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const take = limit;
  console.log(skip, take);
  const categories = await prisma.vendor_types.findMany({
    skip,
    take,
    select: {
      id: true,
      name: true,
      slug: true,
      img: true,
      rank: true,
      enabled: true,
    },
    orderBy: {
      rank: "asc",
    },
  });

  const totalCategories = await prisma.vendor_types.count();

  return {
    data: categories,
    total: totalCategories,
    totalPages: Math.ceil(totalCategories / limit),
  };
};

export const editCategory = async (id: string, data: any) =>
  await prisma.vendor_types.update({
    where: { id },
    data,
  });
