import { createContext } from "react";
import { StatusContextType } from "../../types/context/context";

const initial = {
  statuses: [],
  statusChange: () => {},
};

export const StatusContext = createContext<StatusContextType>(initial);
