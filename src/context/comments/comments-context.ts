import { createContext } from "react";
import { CommentsContextType } from "../../types/context";

const initial = {
  statuses: [],
  statusChange: () => {},
};

export const CommentsContext = createContext<CommentsContextType>(initial);
