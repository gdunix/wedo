"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Vendor } from "@/types/vendors";
import * as U from "./utils";

type Props = {
  vendor?: Vendor;
};

const BreadCrumbs: React.FC<Props> = ({ vendor }: Props) => {
  const category = U.getCategory(vendor?.categoryId ?? -1);
  const city = U.getCity(vendor?.cityId ?? -1);
  return (
    <Breadcrumbs
      itemClasses={{
        item: "px-2",
        separator: "px-0",
      }}
    >
      <BreadcrumbItem key="home" href="/">
        HOME
      </BreadcrumbItem>
      {category && (
        <BreadcrumbItem key={category?.slug} href={`/vendors/${category?.slug}`}>
          {category.name?.toUpperCase()}
        </BreadcrumbItem>
      )}
      {city && (
        <BreadcrumbItem key={city?.slug} href={`/vendors/${category?.slug}/${city?.slug}`}>
          {city.name?.toUpperCase()}
        </BreadcrumbItem>
      )}
      {vendor && (
        <BreadcrumbItem
          key={vendor.slug}
          href={`/vendors/${category?.slug}/${city?.slug}/${vendor.slug}`}
        >
          {vendor.name.toUpperCase()}
        </BreadcrumbItem>
      )}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
