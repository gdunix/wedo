"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, PasswordInput } from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "@/components/ui/link";
import { EyeFilledIcon, EyeSlashIcon } from "@/components/icons";

type Props = {
  isModal?: boolean;
};

const SignUp = ({ isModal = false }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  // const { closeAuthModal, openLoginModal } = useAuth();
  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("event", event.target);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(formData);
    // closeAuthModal();
  };
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  const openLoginModal = () => {
    router.push("/signup");
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
            variant="bordered"
            placeholder="Enter your email"
            fullWidth
          />
        </div>
        <div>
          <PasswordInput label="Password" name="password" fullWidth />
        </div>
        <div>
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
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
  );
};

export default SignUp;
