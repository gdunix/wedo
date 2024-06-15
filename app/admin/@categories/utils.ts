import { Category } from "@/types";
import * as U from "@/helpers/utils";

export const getColumns = (data: Category[]) => {
  const columnNames = data && data.length ? Object.keys(data[0]) : [];
  const columns = columnNames.map((column) => ({
    name: U.capitalize(column),
    uid: column,
    sortable: false,
    hidden: column === "id",
    component: column === "enabled" ? "Checkbox" : column === "img" ? 'Image'  : "Text",
  }));

  return [
    ...columns,
    {
      name: "Actions",
      uid: "actions",
      component: "Actions",
    },
  ];
};
