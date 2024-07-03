import { handler } from "../handler";
import * as Q from "./queries";

const getCategories = async (): Promise<any> => {
  return await Q.getCategories();
};

export const GET = async () => await handler(getCategories);
