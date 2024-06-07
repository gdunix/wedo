"use client";
import { useRouter } from "next/navigation";
import { EmailInput, PasswordInput } from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "@/components/ui/link";
import { Snackbar, showSnackbar } from "@/components/ui/snackbar";
import { signup } from "@/actions/users";

type Props = {
  isModal?: boolean;
};

const SignUp = ({ isModal = false }: Props) => {
  const router = useRouter();
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("event", event);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password !== confirmPassword) {
      showSnackbar("Passwords do not match", { variant: "error" });
      return;
    }
    if (password.length < 7) {
      showSnackbar("Password must have than 6 characters", {
        variant: "error",
      });
      return;
    }
    try {
      await signup({
        email,
        password,
      });
      showSnackbar("Signup successful", { variant: "success" });
      isModal && closeModal();
    } catch (error) {
      showSnackbar(`${error}`, { variant: "error" });
    }
  };
  const closeModal = () => {
    router.back();
  };
  const openLoginModal = () => {
    router.push("/login");
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={(e) => {
          console.log(e);
          onSubmit(e);
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <EmailInput
              name="email"
              variant="bordered"
              isRequired
              fullWidth
            />
          </div>
          <div>
            <PasswordInput
              label="Password"
              name="password"
              isRequired
              fullWidth
            />
          </div>
          <div>
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              isRequired
              fullWidth
            />
          </div>
          {isModal && (
            <div className="flex pl-1 pt-2 pb-1 justify-between">
              <Link color="primary" onPress={openLoginModal} href="#" size="sm">
                Already a member? Login
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
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      <Snackbar />
    </>
  );
};

export default SignUp;
