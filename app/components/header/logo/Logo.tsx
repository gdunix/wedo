import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin-ext"],
});

const Logo: React.FC = () => (
    <Link href="/">
      <div className="flex items-center gap-x-3 text-lg font-bold">
        <div
          className={`mr-4 text-12xl text-black ${greatVibes.className}`}
        >
          Wedo
        </div>
      </div>
    </Link>
  );

export default Logo;
