"use client";
import { Params } from "@/types/Params";
import * as U from "./utils";
import Rating from "@/components/ui/rating";
import Tabs from "./tabs";
import Contact from "./contact";
import BreadCrumbs from "./breadCrumbs";

const Vendor = ({ params }: Params) => {
  const vendor = U.getVendor(params.slug);
  return (
    <>
      <div className="h-full max-w-[1360px] py-10 px-20 mx-auto my-0">
        <BreadCrumbs vendor={vendor} />
        <div className="text-6xl mt-4 flex">{vendor?.name}</div>
        <div className="flex items-center mb-6">
          <div>
            <Rating edit={false} value={vendor?.rating} count={5} size={20} />
          </div>
          <div className="ml-2 text-md">{vendor?.rating} (12)</div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <Tabs />
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Vendor;
