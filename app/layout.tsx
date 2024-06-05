import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextUIProvider } from "@nextui-org/react";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wedo - The Onnline Wedding Planner",
  description:
    "Plan your perfect wedding effortlessly with our all-in-one online wedding planner",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-32x32.ico" sizes="any" />
      </head>
      <body className={`h-full ${roboto.className}`}>
        <NextUIProvider locale="en-GB">
          {auth}
          <div id="root" className="h-lvh flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
