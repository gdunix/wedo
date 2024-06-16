"use client";

import Link from "@/components/ui/link";
import { usePathname, useRouter } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex gap-8 border-2 rounded-lg	p-4">
      <Link
        className={`cursor-pointer text-${
          pathname === "/admin/users" ? "primary" : "secondary"
        }`}
        onPress={() => router.push("/admin/users")}
      >
        Users
      </Link>
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
