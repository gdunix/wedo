"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

type Props = {
  category: string;
  city?: string;
};

const BreadCrumbs: React.FC<Props> = ({ category = "", city }: Props) => (
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
      <BreadcrumbItem key={category} href={`/vendors/${category}`}>
        {category?.toUpperCase()}
      </BreadcrumbItem>
    )}
    {city && (
      <BreadcrumbItem key={city} href={`/vendors/${category}/${city}`}>
        {city?.toUpperCase()}
      </BreadcrumbItem>
    )}
  </Breadcrumbs>
);

export default BreadCrumbs;
