import { cookies } from "next/headers";

const handler = async (
  callback: (req: Request, res: Response) => any,
  req: Request,
  res: Response
) => await callback(req, res);

const protectedHandler = async (
  callback: (req: Request) => any,
  req: Request,
  res: Response
) => {
  const cookie = cookies().get("AUTH");
  const isAuthenticated = !!cookie?.value;
  if (isAuthenticated) {
    return await handler(callback, req, res);
  } else {
    return new Response("Server Error", { status: 500 });
  }
};

export { handler, protectedHandler };
