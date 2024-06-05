"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, PasswordInput } from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "@/components/ui/link";

type Props = {
  isModal?: boolean;
};

const Login = ({ isModal = false }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  const openSignupModal = () => {
    router.push("/signup");
  };
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("event", event.target);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(formData);
    // closeAuthModal();
  };
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        console.log(e);
        onSubmit(e);
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Input
            label="Email"
            name="email"
            variant="bordered"
            placeholder="Enter your email"
            fullWidth
          />
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
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
