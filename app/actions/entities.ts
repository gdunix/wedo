"use server";

import * as handler from "./handler";
import { Entity } from "@/types";

type Action = "add" | "edit" | "delete";

export const post = async (entity: Entity, action: Action, body?: any) => {
  const res = await fetch(`${process.env.URL}/api/${entity}/${action}`, {
    method: action === "delete" ? "DELETE" : action === "edit" ? "PUT" : "POST",
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getPaginated = async (entity: string, page: number, limit: number) =>
  await handler.getPaginated(entity, page, limit);
