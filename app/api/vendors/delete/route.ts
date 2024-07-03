import { handler } from "../../handler";
import * as Q from "../queries";

const remove = async (req?: Request): Promise<any> => {
  const data = req && (await req.json());
  return await Q.remove(data);
};

export const DELETE = async (req: Request) => await handler(remove, req);
