"use server";

import * as handler from "./handler";

export const getPaginated = async (page: number, limit: number) =>
  await handler.getPaginated("vendors", page, limit);
