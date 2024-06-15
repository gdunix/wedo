import Tabs from "./tabs";

const Layout = ({
  children,
  users,
  categories,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  categories: React.ReactNode;
}>) => {
  return (
    <div className="h-full max-w-[1360px] py-10 px-20 mx-auto my-0 flex flex-col gap-8">
      {children}
      <Tabs users={users} categories={categories} />
    </div>
  );
};

export default Layout;
