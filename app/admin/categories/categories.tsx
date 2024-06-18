"use client";

import Table from "@/components/ui/table";
import * as U from "./utils";
import { Category } from "@/types";

type Props = {
  data: Category[];
  totalPages: number;
};

const Categories = ({ data, totalPages }: Props) => {
  const columns = U.getColumns(data);
  return (
    <Table
      rows={data}
      totalPages={totalPages}
      columns={columns}
    />
  );
};

export default Categories;
