"use client";
import { useState } from "react";
import { Card, CardBody } from "@/components/ui/card";
import Link from "next/link";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import * as C from "@/constants";
import { Category } from "@/types/vendors";
import * as U from "./utils";

const Vendors: React.FC = () => {
  const [viewAll, toggleViewAll] = useState(false);
  const onClick = () => toggleViewAll(!viewAll);
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1360px] mx-auto my-0 text-center flex flex-col items-center gap-8 px-20">
        <div>
          <div className="text-12xl">Find vendors for every vibe</div>
          <div className="text-lg">
            Discover top-rated pros for any budget, background and style.
          </div>
        </div>
        <div className="max-w-[967px] flex flex-wrap gap-8 justify-center">
          {U.getCategories(C.CATEGORIES, viewAll).map((category: Category) => (
            <Card
              className="bg-transparent shadow-none"
              key={`category-${category.id}`}
            >
              <CardBody className="overflow-visible py-2 items-center">
                <Link href={`/vendors/${category.slug}`}>
                  <div className="relative">
                    <div className="absolute top-[124px] left-0 right-0 text-white p-2 z-[100] bg-black bg-opacity-30 text-center align-middle rounded-xl font-bold text-lg">
                      {category.name}
                    </div>
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl h-44 w-64"
                      src={
                        category.img ??
                        "https://nextui.org/images/hero-card-complete.jpeg"
                      }
                    />
                  </div>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
        <Button
          color="primary"
          variant="bordered"
          className="bg-white text-primary border-primary text-lg p-8"
          onClick={onClick}
        >
          {viewAll ? "VIEW LESS" : "VIEW ALL"}
        </Button>
      </div>
    </section>
  );
};

export default Vendors;
