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
      enabled: true
    },
    orderBy: {
      rank: "asc",
    },
  });

export const editCategory = async (id: string, data: any) =>
  await prisma.vendor_types.update({
    where: { id },
    data,
  });
