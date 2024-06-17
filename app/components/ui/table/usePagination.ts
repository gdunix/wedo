"import client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

type Props = {
  totalPages: number;
};

const usePagination = ({ totalPages = 1 }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") ?? "1");

  const setPage = useCallback((page: number) => {
    const query = `?page=${page}`;
    router.push(`${pathname}${query}`);
  }, [pathname, router]);

  const onNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages, setPage]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage]);

  return {
    page,
    setPage,
    onNextPage,
    onPreviousPage,
  };
};

export default usePagination;
