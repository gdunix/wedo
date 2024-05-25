"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardBody } from "@/components/ui/card";
import Button from "@/components/ui/button";
import * as C from "@/constants";

const Form = () => {
  const router = useRouter();
  const handleVendorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);
    setVendor(e.target.value);
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  const [vendor, setVendor] = useState("");
  const [city, setCity] = useState("");
  const onClick = () => {
    router.push(`/vendors/${vendor}/${city}`);
  };
  return (
    <Card className="mt-10 p-10">
      <CardHeader className="text-center text-2xl">Discover Vendors</CardHeader>
      <CardBody className="flex flex-col gap-6 bg-white">
        <Select
          label="Select category"
          selectedKeys={[vendor]}
          onChange={handleVendorChange}
          size="lg"
        >
          {C.VENDORS.map((vendor) => (
            <SelectItem key={vendor.slug} value={vendor.slug}>
              {vendor.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Select city"
          selectedKeys={[city]}
          className="min-w-72"
          onChange={handleCityChange}
          size="lg"
        >
          {C.CITIES.map((city) => (
            <SelectItem key={city.slug} value={city.slug}>
              {city.name}
            </SelectItem>
          ))}
        </Select>
        <Button
          color="primary"
          size="lg"
          onClick={onClick}
          disabled={!city && !vendor}
        >
          Search
        </Button>
      </CardBody>
    </Card>
  );
};

export default Form;
