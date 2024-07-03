import { Category, Field, Vendor } from "@/types";
import * as U from "@/helpers/utils";

const actionColumn = {
  name: "Actions",
  uid: "actions",
  component: "Actions",
};

export const getColumns = (data: Vendor[]) => {
  const columnNames = data && data.length ? Object.keys(data[0]) : [];
  const columns = columnNames.map((column) => ({
    name: column === "vendor_types" ? "Category" : U.capitalize(column),
    uid: column === "vendor_types" ? "category" : column,
    sortable: false,
    hidden: column === "id",
    component: column === "vendor_types" ? "Chip" : "Text",
  }));

  return [...columns, actionColumn];
};

export const getRows = (data: Vendor[]) =>
  data.map((vendor: any) => ({
    id: vendor.id,
    name: vendor.name,
    email: vendor.email,
    description: vendor.description,
    slug: vendor.slug,
    category: U.capitalize(vendor.vendor_types?.name),
  }));

export const getFields = (categories: Category[]): Field[] => [
  {
    component: "input",
    name: "name",
    label: "Name",
    isRequired: true,
  },
  {
    component: "input",
    label: "Email",
    name: "email",
    isRequired: true,
  },
  {
    component: "input",
    name: "slug",
    label: "Slug",
    isRequired: true,
  },
  {
    component: "input",
    label: "Description",
    name: "description",
  },
  {
    component: "select",
    label: "Category",
    name: "vendor_types",
    values: categories.map((category: Category) => ({
      value: category.id,
      label: category.name,
    })),
  },
];
