import { handler } from "../handler";
import * as Q from "./queries";

const getCategories = async (req: Request): Promise<any> => await Q.getUsers();

export const GET = async (req: Request) => await handler(getCategories, req);