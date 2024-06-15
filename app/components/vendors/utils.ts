import { Category } from "@/types/Vendors";
import sortBy from "lodash/fp/sortBy";
import take from "lodash/fp/take";
import compose from "lodash/fp/compose";

export const getCategories = (
  categories: Category[],
  viewAll: boolean
): Category[] =>
  compose(
    (categories: Category[]) => (viewAll ? categories : take(6)(categories)),
    sortBy((o: Category) => o.rank)
  )(categories);
