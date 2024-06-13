"use client";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashIcon } from "@/components/ui/icons";

const PasswordInput = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
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
      {...props}
    />
  );
};

export default PasswordInput;
