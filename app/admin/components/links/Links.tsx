"use client";

import { Fragment } from "react";
import Link from "@/components/ui/link";
import Divider from "@/components/ui/divider";
import { usePathname, useRouter } from "next/navigation";
import { capitalize } from "@/helpers/utils";

type Props = {
  entity: string;
};

const ENTITIES = ["users", "categories", "vendors"];

const EntityLink = ({ entity }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Link
      className={`cursor-pointer text-${
        pathname === `/admin/${entity}` ? "primary" : "secondary"
      }`}
      onPress={() => router.push(`/admin/${entity}`)}
    >
      {capitalize(entity)}
    </Link>
  );
};

const Links = () => (
  <div className="flex gap-4 bg-zinc-100 border-2 rounded-lg p-4">
    {ENTITIES.map((entity: string, index) => (
      <Fragment key={entity}>
        <EntityLink entity={entity} />
        {index < ENTITIES.length - 1 && <Divider orientation="vertical" />}
      </Fragment>
    ))}
  </div>
);

export default Links;
