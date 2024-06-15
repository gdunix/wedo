import { useCallback, useMemo, useState } from "react";

type Props = {
  rows: any[];
  rowsPerPage: number;
};

const usePagination = ({
  rows = [],
  rowsPerPage = 10,
}: Props) => {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(rows.length / rowsPerPage);

  const pagedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows, rowsPerPage]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return {
    page,
    pages,
    pagedData,
    setPage,
    onNextPage,
    onPreviousPage,
  };
};

export default usePagination;
