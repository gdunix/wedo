import { Vendor } from "@/types/Vendors";
import * as C from "../../constants";

export const getVendor = (slug: string): Vendor | undefined =>
  C.VENDORS.find((vendor) => vendor.slug === slug);
