import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@/components/ui/navBar";
import useAuth from "@/hooks/useAuth";
import Logo from "./logo";
import Actions from "./actions";
import Menu from "./menu";

const Header: React.FC = async () => {
  const { isAdmin, isLoggedIn } = await useAuth();
  return (
    <header>
      <Navbar
        position="static"
        className="bg-white"
        maxWidth="full"
        isBordered
        classNames={{
          base: "shadow-xl h-[120px] px-10",
          content: "w-full",
        }}
      >
        <NavbarContent className="flex gap-4" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center" />
        <NavbarContent justify="end" className="flex justify-end">
          <NavbarItem>{isLoggedIn ? <Menu isAdmin={isAdmin} /> : <Actions />}</NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
