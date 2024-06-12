import { signJwtToken } from "@/helpers/jwt";
import { handler } from "@/api/handler";
import { getUser } from "../queries";
import { verifyPassword } from "../utils";

const login = async (req: Request): Promise<Response> => {
  const data = await req.json();
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
  const token = await signJwtToken({
    id: user.id,
    email: user.email,
  });

  return new Response(
    JSON.stringify({
      user: {
        token,
      },
      token,
    }),
    { status: 200 }
  );
};

export const POST = async (req: Request) => await handler(login, req);
