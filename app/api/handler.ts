import { cookies } from "next/headers";

const handler = async (
  callback: (req: Request) => Promise<Response>,
  req: Request
) => {
  try {
    const respose = await callback(req);
    return respose;
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
};

const protectedHandler = async (
  callback: (req: Request) => Promise<Response>,
  req: Request
) => {
  const cookie = cookies().get("AUTH");
  const isAuthenticated = !!cookie?.value;
  if (isAuthenticated) {
    return await handler(callback, req);
  } else {
    return new Response("Server Error", { status: 500 });
  }
};

export { handler, protectedHandler };
