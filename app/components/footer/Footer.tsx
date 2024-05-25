import Divider from "@/components/ui/divider";
import Link from "next/link";
import React from "react";

const Footer: React.FC<> = () => {
  return (
    <footer className="bg-main-light min-h-[220px]">
      <div className="flex max-w-[1360px] py-10 px-20 mx-auto my-0 justify-between">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <div>The Company</div>
            <Divider />
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
          <div className="flex flex-col gap-4">
            <div>Blog</div>
            <Divider />
            <Link href="/">Article 1</Link>
            <Link href="/contact-us">Article 2</Link>
            <Link href="/privacy-policy">Article 3</Link>
          </div>
        </div>
        <div>
          <div>Newsletter</div>
          <Divider />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
