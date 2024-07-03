"use client";

import { useSearchParams, useRouter } from "next/navigation";
import NUIModal from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import { capitalize } from "@/helpers/utils";
import { Entity, Field } from "@/types";
import { post } from "@/actions/entities";
import revalidate from "@/actions/revalidate";
import * as U from "./utils";

type Props = {
  data: any[];
  entity: Entity;
  fields: Field[];
};

const Modal = ({ data = [], entity = "vendors", fields = [] }: Props) => {
  const params = useSearchParams();
  const router = useRouter();
  const onClose = () => {
    router.push(`/admin/${entity}`);
  };
  const isOpen = params.has("edit") || params.has("create");
  const isEdit = !!params.get("edit");
  const id = isEdit ? params.get("edit") ?? -1 : -1;
  const editData = isEdit ? data.find((c) => c.id === id) : null;
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    let body = U.createBody(formData, fields);
    if (id) {
      body = {
        ...body,
        id,
      };
    }
    try {
      await post(entity, isEdit ? "edit" : "add", body);
      revalidate(entity);
      onClose();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };
  return isOpen ? (
    <NUIModal
      title={`${isEdit ? "Edit" : "Add"} ${capitalize(entity)}`}
      onClose={onClose}
    >
      <form method="POST" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          {fields.map((field) =>
            field.component === "input" ? (
              <div key={field.name}>
                <Input
                  name={field.name}
                  label={field.label}
                  variant="bordered"
                  defaultValue={isEdit ? editData[field.name] : ""}
                  isRequired={field.isRequired ?? false}
                  fullWidth={field.fullWidth ?? true}
                />
              </div>
            ) : field.component === "select" ? (
              <div key={field.name}>
                <Select
                  name={field.name}
                  label={field.label}
                  variant="bordered"
                  defaultSelectedKeys={
                    isEdit ? [editData[field.name]?.id] ?? [] : []
                  }
                  isRequired={field.isRequired ?? false}
                  fullWidth={field.fullWidth ?? true}
                >
                  {(field.values ?? []).map(({ value, label }) => (
                    <SelectItem key={value}>{label}</SelectItem>
                  ))}
                </Select>
              </div>
            ) : field.component === "checkbox" ? (
              <div key={field.name}>
                <Checkbox
                  key={field.name}
                  name={field.name}
                  defaultSelected={
                    isEdit ? editData[field.name] ?? false : false
                  }
                >
                  {field.label}
                </Checkbox>
              </div>
            ) : field.component === "image" ? (
              <div key={field.name}>
                <Image src={editData.src} alt={field.name} />
              </div>
            ) : null
          )}
          <div className="flex justify-end my-2">
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </NUIModal>
  ) : null;
};

export default Modal;
