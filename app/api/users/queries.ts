import prisma from "@/api/prisma";

export const getUser = async (email: string) =>
  await prisma.users.findUnique({ where: { email } });

export const addUser = async (email: string, password: string) => {
  const user = await prisma.users.create({ data: { email, password } });
  await prisma.user_roles.create({ data: { user_id: user.id, role_id: 2 } });

  return user;
};
