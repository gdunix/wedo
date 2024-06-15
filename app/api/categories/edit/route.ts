import { protectedHandler } from "../../handler";
import * as Q from "../queries";

const editCategory = async (req: Request): Promise<any> => {
    const data = await req.json();
    const { id, body } = data;
    return await Q.editCategory(id, body);
};

export const PUT = async (req: Request) => await protectedHandler(editCategory, req);