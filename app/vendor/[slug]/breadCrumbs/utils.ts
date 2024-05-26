import * as C from "@/constants";
import { Category, City } from "@/types/Vendors";

export const getCity = (cityId: number): City | undefined =>
  C.CITIES.find((item) => item.id === cityId);

export const getCategory = (categoryId: number): Category | undefined =>
  C.CATEGORIES.find((item) => item.id === categoryId);
