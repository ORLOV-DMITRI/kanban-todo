import { ReactNode } from "react";
export type AuthorType = {
  onModalStateChange: (newStatus: boolean) => void;
};
export type AuthorModalType = {
  hasAuthor: boolean;
  onStateChange: (newState: boolean) => void;
  children: ReactNode;
};
