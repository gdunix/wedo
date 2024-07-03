"use server";

import { revalidateTag } from "next/cache";

const revalidate = (entity: string) => revalidateTag(entity);

export default revalidate;
