import { ReactNode } from "react";

export type ModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
  children: ReactNode;
};
export type AuthorType = {
  setAuthor: (author: string) => void;
  author: string;
  onCloseModal: (newStatus: boolean) => void;
};
