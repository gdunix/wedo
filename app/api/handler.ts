import { cookies } from "next/headers";

const handler = async (
  callback: (req?: Request, params?: any) => Promise<any>,
  req?: Request,
  params?: any
) => {
  try {
    const data = await callback(req, params);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Server Error", { status: 500 });
  }
};

const protectedHandler = async (
  callback: (req?: Request) => Promise<any>,
  req?: Request
) => {
  // const cookie = cookies().get("session");
  // const isAuthenticated = !!cookie?.value;
    const data = await handler(callback, req);
    return new Response(JSON.stringify(data), { status: 200 });
};

export { handler, protectedHandler };
