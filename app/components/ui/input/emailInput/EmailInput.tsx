import { useState } from "react";
import { Input } from "@nextui-org/react";
import * as U from "./utils";

const EmailInput = (props: any) => {
  const [value, setValue] = useState("");
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const isInvalid = U.isInvalid(value);
  return (
    <Input
      label="Email"
      classNames={{ label: "text-black" }}
      placeholder="Enter your email"
      isRequired
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage="Please enter a valid email"
      onChange={onChange}
      {...props}
    />
  );
};

export default EmailInput;
