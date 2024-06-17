import * as Q from "@/actions/users";
import Table from "./users";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const users = await Q.getPaginated(page, 15);
  return (
    <>
      <Table {...users} />
    </>
  );
};

export default Page;
