import * as Q from "@/actions/users";
import Table from "./users";

const Page = async () => {
  const data = await Q.getAll();
  return (
    <>
      <Table data={data} />
    </>
  );
};

export default Page;
