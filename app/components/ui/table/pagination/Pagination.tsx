import { Pagination as NUIPagination, Button } from "@nextui-org/react";

type Props = {
  setPage: (page: number) => void;
  page: number;
  pages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
};

const Pagination = ({
  setPage,
  page,
  pages,
  onNextPage,
  onPreviousPage,
}: Props) => (
  <div className="py-2 px-2 flex justify-end items-center">
    <NUIPagination
      isCompact
      showControls
      showShadow
      color="primary"
      page={page}
      total={pages}
      onChange={setPage}
    />
    <div className="hidden sm:flex w-[30%] justify-end gap-2">
      <Button
        isDisabled={pages === 1}
        size="sm"
        variant="flat"
        onPress={onPreviousPage}
      >
        Previous
      </Button>
      <Button
        isDisabled={pages === 1}
        size="sm"
        variant="flat"
        onPress={onNextPage}
      >
        Next
      </Button>
    </div>
  </div>
);

export default Pagination;
