import { FC, useEffect, useState } from "react";
import { ProviderType, Statuses } from "../../types/context/context";
import { StatusContext } from "./status-context";
const initialStatuses: string[] = ["TODO", "In Progress", "Testing", "Done"];

export const StatusProvider: FC<ProviderType> = ({ children }) => {
  if (localStorage.getItem("statuses") === null) {
    localStorage.setItem("statuses", JSON.stringify(initialStatuses));
  }

  const [statuses, setStatuses] = useState<string[]>(
    JSON.parse(localStorage.getItem("statuses") || "")
  );

  const statusChange = ({ newStatus, prevStatus }: Statuses) => {
    const currentIndexOfDeletedStatus = statuses.indexOf(prevStatus);
    statuses[currentIndexOfDeletedStatus] = newStatus;
    setStatuses([...statuses]);
  };

  useEffect(() => {
    localStorage.setItem("statuses", JSON.stringify(statuses));
  }, [statuses]);

  return (
    <StatusContext.Provider value={{ statuses, statusChange }}>
      {children}
    </StatusContext.Provider>
  );
};
