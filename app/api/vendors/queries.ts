import prisma from "@/api/prisma";

export const getPaginatedVendors = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const take = limit;
  const vendors = await prisma.vendors.findMany({
    skip,
    take,
    select: {
      id: true,
      name: true,
      slug: true,
      email: true,
      description: true,
      vendor_types: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  const totalVendors = await prisma.vendors.count();

  return {
    data: vendors,
    total: totalVendors,
    totalPages: Math.ceil(totalVendors / limit),
  };
};

export const add = async (body: any) =>
  await prisma.vendors.create({
    data: {
      ...body,
      vendor_types: { connect: { id: body.vendor_types } },
    },
  });

export const remove = async (id: string) =>
  await prisma.vendors.delete({
    where: {
      id,
    },
  });

export const update = async (id: string, data: any) =>
  await prisma.vendor_types.update({
    where: { id },
    data,
  });
