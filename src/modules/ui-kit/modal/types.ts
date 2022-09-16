import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (showModal: any) => void;
};
