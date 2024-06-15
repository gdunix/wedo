"use client";

import { useState } from "react";
import { Tabs as NUITabs, Tab } from "@/components/ui/tabs";
type Props = {
  users: React.ReactNode;
  categories: React.ReactNode;
};

const Tabs = ({ users, categories }: Props) => {
  const [tab, setTab] = useState("users");
  return (
    <NUITabs
      selectedKey={tab}
      onSelectionChange={(value) => setTab(value as string)}
    >
      <Tab key="users" title="Users">
        {users}
      </Tab>
      <Tab key="categories" title="Categories">
        {categories}
      </Tab>
    </NUITabs>
  );
};

export default Tabs;
