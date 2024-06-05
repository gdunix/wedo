"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const Actions: React.FC = () => {
  const router = useRouter();
  const gotoLogin = () => router.push("/login");
  const gotoSignUp = () => router.push("/signup");
  return (
    <div className="flex gap-4">
      <Button color="primary" onClick={gotoLogin} size="md">
        Login
      </Button>
      <Button onClick={gotoSignUp} size="md">
        Sign up
      </Button>
    </div>
  );
};

export default Actions;
