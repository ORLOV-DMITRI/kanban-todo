import { createContext } from "react";
import { AuthorContextType } from "../../types/context";

const initial = {
  author: "",
  authorSave: () => {},
  authorDelete: () => {},
};
export const AuthorContext = createContext<AuthorContextType>(initial);
