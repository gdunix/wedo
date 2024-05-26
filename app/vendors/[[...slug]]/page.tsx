import { Params } from "@/types/Params";
import BreadCrumbs from "./breadCrumbs";
import Title from "./title";
import List from "./list/List";
import * as U from "./utils";

const Vendors = ({ params }: Params) => {
  const { slug = [] } = params;
  const category = slug[0];
  const city = slug[1];
  const vendors = U.getVendors({ category, city });
  return (
    <div className="h-svh max-w-[1360px] py-10 mx-auto my-0">
      <BreadCrumbs category={category} city={city} />
      <Title category={category} city={city} results={vendors?.length} />
      <List vendors={vendors} />
    </div>
  );
};

export default Vendors;
