"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EmailInput, PasswordInput } from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "@/components/ui/link";
import { showSnackbar } from "@/components/ui/snackbar";
import { login } from "@/actions/users";
import Spinner from "@/components/ui/spinner";

type Props = {
  isModal?: boolean;
};

const Login = ({ isModal = false }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  const openSignupModal = () => {
    router.push("/signup");
  };
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
      showSnackbar("Both fields are required", { variant: "error" });
      return;
    }
    try {
      setLoading(true);
      const response = await login({
        email,
        password,
      });
      router.push(response?.redirectUrl || "/dashboard");
      router.refresh();
      showSnackbar("Login successful", { variant: "success" });
    } catch (error) {
      showSnackbar(`${error}`, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <div>
          <EmailInput name="email" variant="bordered" isRequired fullWidth />
        </div>
        <div>
          <PasswordInput label="Password" name="password" fullWidth />
        </div>
        {isModal && (
          <div className="flex pl-1 pt-2 pb-1 justify-between">
            <Link color="primary" onPress={openSignupModal} href="#" size="sm">
              Not a member? Sign Up
            </Link>
          </div>
        )}
        <div className="flex justify-end my-2">
          {isModal && (
            <Button color="danger" variant="light" onPress={closeModal}>
              Close
            </Button>
          )}
          <Button type="submit" color="primary">
            {loading ? <Spinner color="white" /> : "Login"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
