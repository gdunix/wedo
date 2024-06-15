"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Table as NUITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Image,
  Chip,
} from "@nextui-org/react";
import Pagination from "./pagination";
import usePagination from "./usePagination";
import { Action } from "./types";
import Actions from "./actions";

type Props = {
  rows: any[];
  columns: any[];
  actions?: Action[];
  topContent?: React.ReactNode;
};

const Table = ({
  rows = [],
  columns = [],
  actions = [],
  topContent = "",
}: Props) => {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const { setPage, page, pages, pagedData, onNextPage, onPreviousPage } =
    usePagination({
      rows,
      rowsPerPage,
    });

  const bottomContent = useMemo(() => {
    return (
      <Pagination
        setPage={setPage}
        page={page}
        pages={pages}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />
    );
  }, [page, pages, onNextPage, onPreviousPage, setPage]);

  const renderCell = useCallback(
    (
      columns: { uid: string; component?: string }[] = [],
      columnKey: string,
      item: any
    ) => {
      const value = item[columnKey];
      const component =
        columns.find((f) => f.uid === columnKey)?.component || "Text";
      return component === "Checkbox" ? (
        <Checkbox isDisabled isSelected={Boolean(value)} />
      ) : component == "Chip" ? (
        <Chip color="primary">
          {value}
        </Chip>
      ) : component == "Actions" ? (
        <Actions actions={actions} id={item.id} />
      ) : component === "Image" ? (
        <Image src={item?.img} alt="table-image" width={300} height={300} />
      ) : (
        <div>{value}</div>
      );
    },
    []
  );

  return (
    <NUITable
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "",
      }}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns.filter((f) => !f.hidden)}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={pagedData}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(columns, columnKey as string, item)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </NUITable>
  );
};

export default Table;
