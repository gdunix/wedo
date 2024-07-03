import { handler } from "@/api/handler";
import { getUser } from "../queries";
import { verifyPassword } from "../utils";

const login = async (req?: Request): Promise<any> => {
  const data = req && await req.json();
  const { email, password } = data;
  if (!email || !password) {
    return new Response("Missing required fields", { status: 400 });
  }

  const user = await getUser(email);
  if (!user) {
    return new Response("User not found. Check your credentials", {
      status: 409,
    });
  }
  const isPasswordCorrect = await verifyPassword(password, user.password);
  if (!isPasswordCorrect) {
    return new Response("Invalid password", {
      status: 401,
    });
  }

  return {
    id: user.id,
    email: user.email,
    role: user.roles.role_name,
    redirectUrl: user.roles.role_name === "admin" ? "/admin" : "/dashboard",
  };
};

export const POST = async (req: Request) => await handler(login, req);
