import { handler } from "../../handler";
import * as Q from "../queries";

const update = async (req?: Request): Promise<any> => {
  const data = req && (await req.json());
  return await Q.update(data.id, data);
};

export const PUT = async (req: Request) => await handler(update, req);
