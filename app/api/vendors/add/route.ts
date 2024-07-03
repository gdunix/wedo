import { handler } from "../../handler";
import * as Q from "../queries";

const add = async (req?: Request): Promise<any> => {
    const data = req && await req.json();
    return await Q.add(data);
};

export const POST = async (req: Request) => await handler(add, req);