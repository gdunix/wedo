"use client";

import { useRouter } from "next/navigation";
import Table from "@/components/ui/table";
import Button from "@/components/ui/button";
import { PlusIcon } from "@/components/ui/icons";
import { Category, Vendor } from "@/types";
import * as U from "./utils";
import useActions from "../../useActions";
import Modal from "@/admin/components/modal";

type Props = {
  data: Vendor[];
  totalPages: number;
  categories: Category[];
};

const Vendors = ({ data, totalPages, categories }: Props) => {
  const router = useRouter();
  const columns = U.getColumns(data);
  const rows = U.getRows(data);
  const fields = U.getFields(categories);
  const actions = useActions("vendors");
  const openModal = () => {
    router.push("/admin/vendors?create=true");
  };
  return (
    <>
      <div className="flex justify-end gap-3 items-end">
        <Button onClick={openModal} color="primary" startContent={<PlusIcon />}>
          Add New
        </Button>
      </div>
      <Table
        rows={rows}
        columns={columns}
        totalPages={totalPages}
        actions={actions}
      />
      <Modal data={data} entity="vendors" fields={fields} />
    </>
  );
};

export default Vendors;
