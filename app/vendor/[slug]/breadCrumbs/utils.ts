import * as C from "@/constants";
import {  CategoryTemp as Category, City } from "@/types";

export const getCity = (cityId: number): City | undefined =>
  C.CITIES.find((item) => item.id === cityId);

export const getCategory = (categoryId: number): Category | undefined =>
  C.CATEGORIES.find((item) => item.id === categoryId);
