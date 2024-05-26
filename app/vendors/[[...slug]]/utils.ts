import * as C from "@/constants";
import { Vendor } from "@/types/Vendors";

export const getVendors = ({
  category = "",
  city,
}: {
  category: string;
  city?: string;
}): Vendor[] => {
  const categoryId = C.CATEGORIES.find((item) => item.slug === category)?.id;
  const cityId = C.CITIES.find((item) => item.slug === city)?.id;
  return !city
    ? C.VENDORS.filter((item: Vendor) => item.categoryId === categoryId)
    : C.VENDORS.filter(
        (item: Vendor) =>
          item.categoryId === categoryId && item.cityId === cityId
      ) ?? [];
};

export const getCity = (cityId: number): string =>
  C.CITIES.find((item) => item.id === cityId)?.name ?? "";

export const getCityBySlug = (slug: string): string =>
  C.CITIES.find((item) => item.slug === slug)?.name ?? "";

export const getCategoryBySlug = (slug: strung): string =>
  C.CATEGORIES.find((item) => item.slug === slug)?.name ?? "";
