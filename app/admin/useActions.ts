import { useRouter } from "next/navigation";
import { post } from "@/actions/entities";
import revalidate from "@/actions/revalidate";
import { Entity } from "@/types";

const useActions = (entity: Entity) => {
  const router = useRouter();
  const actions = [
    {
      name: "Edit",
      onClick: (id: string) => {
        router.push(`/admin/${entity}?edit=${id}`);
      },
    },
    {
      name: "Delete",
      onClick: async (id: string) => {
        try {
          await post(entity, "delete", id);
          revalidate(entity);
        } catch (error) {
          console.error("Failed to delete", error);
        }
      },
    },
  ];

  return actions;
};

export default useActions;
