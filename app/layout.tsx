import type { Metadata } from "next";
import { Inter, Slabo_27px, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextUIProvider } from "@nextui-org/react";
import Auth from "@/components/auth";


const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wedo - The Onnline Wedding Planner",
  description: "Plan your perfect wedding effortlessly with our all-in-one online wedding planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon-32x32.ico" sizes="any" />
      </head>
      <body className={`h-full ${roboto.className}`}>
        <NextUIProvider locale="en-GB">
          <div id="root" className="h-lvh flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </NextUIProvider>
        <Auth />
      </body>
    </html>
  );
}
