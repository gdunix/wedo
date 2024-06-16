"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Category } from "@/types";

type Props = {
  data: Category[];
};

const Edit = ({ data = [] }: Props) => {
  const params = useSearchParams();
  const router = useRouter();
  const categoryId = params.get("edit");
  const onClose = () => {
    router.push("/admin/categories");
  };
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {};
  const category = data.find((c) => c.id === categoryId);
  return !!categoryId ? (
    <Modal title="Edit Category" onClose={onClose}>
      <form method="POST" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <Image src={category?.img} alt="category-image" />
          </div>
          <div>
            <Input
              name="name"
              label="Name"
              variant="bordered"
              defaultValue={category?.name}
              isRequired
              fullWidth
            />
          </div>
          <div>
            <Input
              name="slug"
              label="Slug"
              variant="bordered"
              defaultValue={category?.slug}
              isRequired
              fullWidth
            />
          </div>
          <div>
            <Input
              name="img"
              label="Image"
              variant="bordered"
              defaultValue={category?.img}
              isRequired
              fullWidth
            />
          </div>
          <div>
            <Select
              name="rank"
              label="Rank"
              variant="bordered"
              defaultSelectedKeys={[category?.rank?.toString() || ""]}
              isRequired
              fullWidth
            >
              {Array.from(Array(30).keys()).map((i) => (
                <SelectItem key={i.toString()}>{i.toString()}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="">
            <Checkbox name="enabled" defaultSelected={category?.enabled}>
              Enabled
            </Checkbox>
          </div>
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
    </Modal>
  ) : null;
};

export default Edit;
