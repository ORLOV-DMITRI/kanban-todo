import { createContext } from "react";
import { CommentsContextType } from "../../types/context";

const initial = {
  commentSave: () => {},
  commentUpdate: () => {},
  commentDelete: () => {},
};

export const CommentsContext = createContext<CommentsContextType>(initial);
