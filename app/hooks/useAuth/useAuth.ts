import { cookies } from "next/headers";

const useAuth = () => {
  const cookie = cookies().get("AUTH");
  const isLoggedIn = !!cookie;

  return { isLoggedIn };
};

export default useAuth;
