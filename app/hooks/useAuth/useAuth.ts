import { getSession } from "@/actions/session";

const useAuth = async () => {
  const session = await getSession();
  const role = session?.payload?.user?.role;
  const isAdmin = role === "admin";

  return { isLoggedIn: !!session, isAdmin };
};

export default useAuth;
