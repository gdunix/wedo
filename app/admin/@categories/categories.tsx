"use client";

import { useRouter } from "next/navigation";
import Table from "@/components/ui/table";
import * as U from "./utils";
import { Category } from "@/types";

type Props = {
  data: Category[];
};

const Categories = ({ data }: Props) => {
  const columns = U.getColumns(data);
  const router = useRouter();
  const actions = [
    {
      name: "Edit",
      onClick: (id: string) => {
        router.push(`/admin/categories?edit=${id}`);
      },
    },
    { name: "Delete", onClick: (id: string) => {} },
  ];
  return <Table rows={data} columns={columns} actions={actions} />;
};

export default Categories;
