"use client";

import { Great_Vibes } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "@/components/ui/link";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin-ext"],
});

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <Link className="cursor-pointer" onPress={() => router.push("/")}>
      <div className="flex items-center gap-x-3 text-lg font-bold">
        <div className={`mr-4 text-12xl text-black ${greatVibes.className}`}>
          Wedo
        </div>
      </div>
    </Link>
  );
};

export default Logo;
