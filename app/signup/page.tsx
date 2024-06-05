"use client";
import SignUp from "@/components/auth/signup";

const SignupPage = () => (
  <div className="h-full max-w-[1360px] py-10 px-20 mx-auto my-0 flex flex-col gap-8">
    <div className="text-6xl">Sign Up</div>
    <div className="max-w-md">
      <SignUp />
    </div>
  </div>
);

export default SignupPage;