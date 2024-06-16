import Links from "./links";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full max-w-[1360px] py-10 px-20 mx-auto my-0 flex flex-col gap-8">
      <div className="text-6xl">Admin</div>
      <Links />
      {children}
    </div>
  );
};

export default Layout;
