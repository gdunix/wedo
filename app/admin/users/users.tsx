"use client";


import Table from "@/components/ui/table";
import { User } from "@/types";
import * as U from "./utils";

type Props = {
  data: User[];
  totalPages: number;
};

const Users = ({ data, totalPages }: Props) => {
  const columns = U.getColumns(data);
  const rows = U.getRows(data);
  
  return (
    <Table
      rows={rows}
      columns={columns}
      totalPages={totalPages}
    />
  );
};

export default Users;
