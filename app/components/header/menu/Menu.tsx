"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { removeAuthCookie } from "@/actions/cookies";

const Menu: React.FC = () => {
  const router = useRouter();
  const onRedirect = (e: any) => {
    const target = e.target as HTMLElement;
    const url = target?.dataset?.key ?? '';
    url && router.push(`/${url}`);
  };
  const onLogout = () => {
    removeAuthCookie();
    router.refresh();
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">My Account</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="dashboard"
          textValue="dashboard"
          onPress={onRedirect}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={onLogout}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Menu;
