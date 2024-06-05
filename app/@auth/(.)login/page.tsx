"use client";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import Login from "@/components/auth/login";

const LoginPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <Modal title="Login" onClose={onClose}>
      <Login isModal />
    </Modal>
  );
};

export default LoginPage;
