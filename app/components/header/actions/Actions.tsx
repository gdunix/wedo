"use client";
import Button from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const Actions: React.FC = () => {
  const { openLoginModal, openSignupModal } = useAuth();
  return (
    <div className="flex gap-4">
      <Button color="primary" onClick={openLoginModal} size="md">
        Login
      </Button>
      <Button onClick={openSignupModal} size="md">
        Sign up
      </Button>
    </div>
  );
};

export default Actions;
