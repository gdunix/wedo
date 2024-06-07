import {
  Modal as NextUIModal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

type Props = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ title = "", onClose, children, ...rest }: Props) => (
  <NextUIModal
    defaultOpen
    onClose={onClose}
    placement="top"
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
    {...rest}
  >
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </NextUIModal>
);

export default Modal;
