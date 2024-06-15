import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../../icons";
import { Action } from "../types";

type Props = {
  id: string;
  actions: Action[];
};

const Actions = ({ id, actions = [] }: Props) => (
  <div className="relative flex justify-start items-center gap-2">
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="lg" variant="light">
          <VerticalDotsIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {actions.map((action: Action) => {
          const onPress = () => {
            id && action.onClick(id);
          };
          return (
            <DropdownItem key={action.name} onPress={onPress}>
              {action.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  </div>
);

export default Actions;
