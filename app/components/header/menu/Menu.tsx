"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { logout } from "@/actions/users";

type Props = {
  isAdmin: boolean;
};

const Menu: React.FC<Props> = ({ isAdmin }: Props) => {
  const router = useRouter();
  const onRedirect = (e: any) => {
    const target = e.target as HTMLElement;
    const url = target?.dataset?.key ?? "";
    url && router.push(`/${url}`);
  };
  const onLogout = () => {
    logout();
    router.refresh();
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">My Account</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {isAdmin ? (
          <DropdownItem key="admin" textValue="admin" onPress={onRedirect}>
            Admin
          </DropdownItem>
        ) : <></>}
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
