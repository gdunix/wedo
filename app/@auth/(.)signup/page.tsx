"use client"
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import Signup from "@/components/auth/signup";

const SignupModal = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <Modal title="Sign Up" onClose={onClose}>
      <Signup isModal />
    </Modal>
  );
};

export default SignupModal;
