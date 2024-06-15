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
