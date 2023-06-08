import { FC, useState, createContext, useMemo, useEffect } from "react";
import { ProviderType, StatusContextType } from "../@types/globalType";

const taskStatuses: string[] = ["TODO", "In Progress", "Testing", "Done"];
export const StatusContext = createContext<StatusContextType | null>(null);

const StatusProvider: FC<ProviderType> = ({ children }) => {
  const [statuses, setStatuses] = useState<string[]>(
    JSON.parse(localStorage.getItem("statuses")!) || taskStatuses
  );

  useEffect(() => {
    localStorage.setItem("statuses", JSON.stringify(statuses));
  }, [statuses]);

  const changeStatus = (newStatus: string, prevStatus: string) => {
    const currentIndexOfDeletedStatus = taskStatuses.indexOf(prevStatus);
    statuses[currentIndexOfDeletedStatus] = newStatus;
    setStatuses([...statuses]);
  };
  const value = useMemo(() => [statuses, changeStatus], [statuses]);

  return (
    <StatusContext.Provider value={{ statuses, changeStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
export default StatusProvider;
