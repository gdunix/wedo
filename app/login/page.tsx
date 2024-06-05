"use client";
import Login from "@/components/auth/login";

const LoginPage = () => (
  <div className="h-full max-w-[1360px] py-10 px-20 mx-auto my-0 flex flex-col gap-8">
    <div className="text-6xl">Login</div>
    <div className="max-w-md">
      <Login />
    </div>
  </div>
);

export default LoginPage;
