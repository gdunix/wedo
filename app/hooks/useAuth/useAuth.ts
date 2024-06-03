import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as C from "./constants";

const useAuth = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const auth = searchParams.get("auth");
  const openAuthModal = (mode: string = C.MODES.LOGIN) => {
    router.push(`${pathname}?auth=${mode}`);
  };
  const openLoginModal = () => openAuthModal(C.MODES.LOGIN);
  const openSignupModal = () => openAuthModal(C.MODES.SIGNUP);
  const closeAuthModal = () => {
    router.push(pathname);
  };
  const isModalOpen = !!auth;
  const isLogin = auth === C.MODES.LOGIN;
  const isSignup = auth === C.MODES.SIGNUP;

  return {
    openAuthModal,
    openLoginModal,
    openSignupModal,
    closeAuthModal,
    isModalOpen,
    isLogin,
    isSignup,
  };
};

export default useAuth;
