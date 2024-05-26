"use client";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import * as U from "../utils";
import { Image } from "@nextui-org/react";
import Rating from "@/components/ui/rating";
import { Vendor } from "@/types/Vendors";
import Link from "next/link";

type Props = {
  vendors: Vendor[];
};

const List: React.FC<Props> = ({ vendors = [] }: Props) => {
  return !vendors.length ? (
    <div className="text-2xl my-8">No Results Found</div>
  ) : (
    <div className="flex flex-wrap gap-8 my-8 max-w-[1000px]">
      {vendors.map((vendor: Vendor, index) => (
        <Link key={index} href={`/vendor/${vendor.slug}`}>
          <Card>
            <CardHeader>{vendor.name}</CardHeader>
            <CardBody>
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={
                  vendor.img ??
                  "https://nextui.org/images/hero-card-complete.jpeg"
                }
                width={200}
                height={200}
              />
              <div className="flex justify-between">
                <div>{U.getCity(vendor.cityId)}</div>
                <div className="flex items-center">
                  <Rating count={1} value={1} size={12} edit={false}/>
                  <span className="ml-1">{vendor.rating ?? "No rating"}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default List;
