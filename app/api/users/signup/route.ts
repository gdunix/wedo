import bcrypt from "bcrypt";
import { handler } from "@/api/handler";
import { addUser, getUser } from "../queries";

const signup = async (req: Request, res: Response) => {
  const data = await req.json();
  const { email, password } = data;
  console.log("body", email, password);
  if (!email || !password) {
    return new Response("Missing required fields", { status: 400 });
  }
  //check if email exists
  const existingUser = await getUser(email);
  if (existingUser) {
    return new Response("User already exists", { status: 409 });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await addUser(email, hashedPassword);
    return new Response(
      JSON.stringify({
        user: {
          email: user.email,
          id: user.id,
        },
      }),
      { status: 201 }
    );
  } catch (error: any) {
    return new Response("Server Error", { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) =>
  await handler(signup, req, res);
