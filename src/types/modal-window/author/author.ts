import { ReactNode } from "react";
export type AuthorType = {
  onToggleModal: (newStatus: boolean) => void;
};
export type AuthorModalType = {
  hasAuthor: boolean;
  onToggleModal: (newState: boolean) => void;
  children: ReactNode;
};
