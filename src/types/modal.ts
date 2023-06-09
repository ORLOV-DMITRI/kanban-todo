import { ReactNode } from "react";

export type ModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
  children: ReactNode;
};
