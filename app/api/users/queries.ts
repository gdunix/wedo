import prisma from "@/api/prisma";

export const getUser = async (email: string) =>
  await prisma.users.findUnique({
    where: { email },
    include: { roles: true },
  });

export const addUser = async (email: string, password: string) => {
  const user = await prisma.users.create({
    data: { email, password, role_id: 2 },
  });

  return user;
};

export const getUsers = async () =>
  await prisma.users.findMany({
    select: {
      id: true,
      email: true,
      created_at: true,
      roles: {
        select: {
          role_name: true,
        },
      },
    },
  });

export const getPaginatedUsers = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const take = limit;
  const users = await prisma.users.findMany({
    skip: skip,
    take: take,
    select: {
      id: true,
      email: true,
      created_at: true,
      roles: {
        select: {
          role_name: true,
        },
      },
    },
  });

  const totalUsers = await prisma.users.count();

  return {
    data: users,
    total: totalUsers,
    totalPages: Math.ceil(totalUsers / limit),
  };
};
