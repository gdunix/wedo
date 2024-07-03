import { Field } from "@/types";

export const createBody = (formData: FormData, fields: Field[]) =>
  fields.reduce((acc, curr) => {
    if (
      curr.component === "select" &&
      formData.getAll(curr.name)?.length > 0
    ) {
      return {
        ...acc,
        [curr.name]: formData.getAll(curr.name)[0],
      };
    } else {
      return {
        ...acc,
        [curr.name]: formData.get(curr.name),
      };
    }
  }, {});
