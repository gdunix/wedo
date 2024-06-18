import { useRouter } from "next/navigation";

type Props = {
  entity: string;
};

const useActions = ({ entity }: Props) => {
  const router = useRouter();
  const actions = [
    {
      name: "Edit",
      onClick: (id: string) => {
        router.push(`/admin/${entity}?edit=${id}`);
      },
    },
    { name: "Delete", onClick: (id: string) => {} },
  ];

  return actions;
};

export default useActions;
