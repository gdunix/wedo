import dynamic from "next/dynamic";
import Spinner from "@/components/ui/spinner";
import * as Q from "@/actions/vendors";
import * as QC from "@/actions/categories";

const Table = dynamic(() => import("./table"), {
  loading: () => <Spinner />,
});

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const vendors = await Q.getPaginated(page, 15);
  const categories = await QC.getAll();
  return (
    <>
      <Table {...vendors} categories={categories} />
    </>
  );
};

export default Page;
