"use client";
import { useState } from "react";
import { Tabs, Tab } from "@/components/ui/tabs";

const VendorTabs = () => {
  const [tab, setTab] = useState("details");
  return (
    <Tabs
      selectedKey={tab}
      onSelectionChange={(value) => setTab(value as string)}
      variant="underlined"
      color="primary"
      classNames={{
        tabList:
          "gap-6 w-full relative rounded-none p-0 border-b border-divider w-full",
        cursor: "w-full",
        tab: "max-w-fit px-4 h-12 text-lg",
        panel: "p-4 text-lg min-h-[400px]",
      }}
    >
      <Tab key="details" title="Details">
        Details
      </Tab>
      <Tab key="pricing" title="Pricing">
        Pricing
      </Tab>
      <Tab key="reviews" title="Reviews">
        Reviews
      </Tab>
    </Tabs>
  );
};

export default VendorTabs;
