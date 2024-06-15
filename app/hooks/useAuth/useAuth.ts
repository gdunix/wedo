import { getSession } from "@/actions/session";

const useAuth = async () => {
  const session = await getSession();

  return { isLoggedIn: !!session, role: session?.payload?.user?.role };
};

export default useAuth;
