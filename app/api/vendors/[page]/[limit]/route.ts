import { handler } from "../../../handler";
import * as Q from "../../queries";

const getVendors = async (_: Request, params: any): Promise<any> => {
  const page = params?.page ? parseInt(params?.page) : 1;
  const limit = params?.limit ? parseInt(params?.limit) : 10;
  return await Q.getPaginatedVendors(page, limit);
};

export const GET = async (
  req: Request,
  { params }: { params: { page: number; limit: number } }
) => await handler(getVendors, req, params);
