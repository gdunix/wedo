import { User } from "@/types";
import * as U from "@/helpers/utils";

const actionColumn = {
  name: "Actions",
  uid: "actions",
  component: "Actions",
};

export const getColumns = (data: User[]) => {
  const columnNames = data && data.length ? Object.keys(data[0]) : [];
  const columns = columnNames.map((column) => ({
    name: column === "roles" ? "Role" : U.capitalize(column),
    uid: column === "roles" ? "role" : column,
    sortable: false,
    hidden: column === "id",
    component: column === "roles" ? "Chip" : "Text",
  }));

  return columns;
};

export const getRows = (data: User[]) =>
  data.map((user: any) => ({
    id: user.id,
    email: user.email,
    created_at: user.created_at,
    role: U.capitalize(user.roles?.role_name ?? ''),
  }));
