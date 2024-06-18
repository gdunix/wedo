"use client";

import Link from "@/components/ui/link";
import Divider from "@/components/ui/divider";
import { usePathname, useRouter } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex gap-4 bg-zinc-100 border-2 rounded-lg p-4">
      <Link
        className={`cursor-pointer text-${
          pathname === "/admin/users" ? "primary" : "secondary"
        }`}
        onPress={() => router.push("/admin/users")}
      >
        Users
      </Link>
      <Divider orientation="vertical" />
      <Link
        className={`cursor-pointer text-${
          pathname === "/admin/categories" ? "primary" : "secondary"
        }`}
        onPress={() => router.push("/admin/categories")}
      >
        Categories
      </Link>
    </div>
  );
};

export default Links;
