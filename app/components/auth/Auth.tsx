"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@/components/ui/modal";
import useAuth from "@/hooks/useAuth";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const Auth = () => {
  const { closeAuthModal, isModalOpen, isLogin } = useAuth();
  return (
    <Modal
      backdrop="opaque"
      isOpen={isModalOpen}
      onClose={closeAuthModal}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {isLogin ? "Login" : "Sign Up"}
        </ModalHeader>
        <ModalBody>{isLogin ? <Login /> : <SignUp />}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Auth;
