import { Input, Button } from "@nextui-org/react";
import { PlusIcon, SearchIcon } from "@/components/ui/icons";

type Props = {
  filterValue: string;
  onClear: () => void;
  onSearchChange: (value: string) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  itemsCount?: number;
};

const TopBar = ({
  filterValue,
  onClear,
  onSearchChange,
  onRowsPerPageChange,
  itemsCount = 0,
}: Props) => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between gap-3 items-end">
      <Input
        isClearable
        className="w-full sm:max-w-[44%]"
        placeholder="Search by name..."
        startContent={<SearchIcon />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
      />
      <div className="flex gap-3">
        <Button color="primary" endContent={<PlusIcon />}>
          Add New
        </Button>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-default-400 text-small">
        Total {itemsCount} users
      </span>
      <label className="flex items-center text-default-400 text-small">
        Rows per page:
        <select
          className="bg-transparent outline-none text-default-400 text-small"
          onChange={onRowsPerPageChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </label>
    </div>
  </div>
);

export default TopBar;
