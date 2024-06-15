"use client";

import { useRouter } from "next/navigation";
import Table from "@/components/ui/table";
import { User } from "@/types";
import * as U from "./utils";

type Props = {
  data: User[];
};

const Users = ({ data }: Props) => {
  const columns = U.getColumns(data);
  const rows = U.getRows(data);
  console.log('rows', rows);
  const router = useRouter();
  const actions = [
    {
      name: "Edit",
      onClick: (id: string) => {
        // router.push(`/admin/users?edit=${id}`);
      },
    },
    { name: "Delete", onClick: (id: string) => {} },
  ];
  return <Table rows={rows} columns={columns} actions={actions} />;
};

export default Users;