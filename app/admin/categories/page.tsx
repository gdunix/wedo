import * as Q from "@/actions/categories";
import Table from "./categories";
import Edit from "./edit";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const categories = await Q.getPaginated(page, 15);
  return (
    <>
      <Table {...categories} />
      <Edit data={categories?.data} />
    </>
  );
};

export default Page;
