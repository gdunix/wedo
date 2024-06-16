import * as Q from "@/actions/categories"
import Table from "./categories";
import Edit from "./edit";

const Page = async () => {
  const data = await Q.getAll();
  return (
    <>
      <Table data={data} />
      <Edit data={data} />
    </>
  );
};

export default Page;
