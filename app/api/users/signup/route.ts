import { handler } from "@/api/handler";
import { addUser, getUser } from "../queries";
import { hashPassword } from "../utils";

const signup = async (req?: Request) => {
  const data = req && await req.json();
  const { email, password } = data;
  if (!email || !password) {
    return new Response("Missing required fields", { status: 400 });
  }
  const existingUser = await getUser(email);
  if (existingUser) {
    return new Response("User already exists", { status: 409 });
  }
  const hashedPassword = await hashPassword(password);
  const user = await addUser(email, hashedPassword);
  return {
    user: {
      email: user.email,
      id: user.id,
    },
  };
};

export const POST = async (req: Request) => await handler(signup, req);
