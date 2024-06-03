import { useState } from "react";
import Input from "@/components/ui/input";
import { EyeFilledIcon, EyeSlashIcon } from "@/components/icons";
import Button from "@/components/ui/button";
import Link from "@/components/ui/link";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { closeAuthModal, openSignupModal } = useAuth();
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
          <Input
            label="Password"
            name="password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            fullWidth
          />
        </div>
        <div className="flex pl-1 pt-2 pb-1 justify-between">
          <Link color="primary" onPress={openSignupModal} href="#" size="sm">
            Not a member? Sign Up
          </Link>
        </div>
        <div className="flex justify-end my-2">
          <Button color="danger" variant="light" onPress={closeAuthModal}>
            Close
          </Button>
          <Button type="submit" color="primary">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
