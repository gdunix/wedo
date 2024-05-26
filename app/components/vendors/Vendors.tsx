import { Card, CardHeader, CardBody } from "@/components/ui/card";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import * as C from "@/constants";
import { Category } from "@/types/Vendors";

const Vendors: React.FC = () => (
  <section className="bg-white w-full">
    <div className="max-w-[1360px] mx-auto my-0 text-center flex flex-col items-center gap-8 px-20">
      <div>
        <div className="text-12xl">Find vendors for every vibe</div>
        <div className="text-lg">
          Discover top-rated pros for any budget, background and style.
        </div>
      </div>
      <div className="max-w-[967px] flex flex-wrap gap-8 justify-center">
        {C.CATEGORIES.filter((f: Category) =>
          [1, 3, 12, 5, 6, 19].includes(f.id)
        ).map((category: Category) => (
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
                    className="object-cover rounded-xl"
                    src={
                      category.img ??
                      "https://nextui.org/images/hero-card-complete.jpeg"
                    }
                    width={270}
                    height={180}
                  />
                </div>
              </Link>
            </CardBody>
          </Card>
        ))}
        <Card className="">
          <CardBody className="bg-grey-900 bg-opacity-50 flex items-center w-[270px] h-[180px]">
            <Link href="/">VIEW ALL</Link>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

export default Vendors;
