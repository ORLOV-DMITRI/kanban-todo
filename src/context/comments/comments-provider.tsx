import { FC, useContext, useEffect, useMemo, useState } from "react";
import { ProviderType, Statuses } from "../../types/context";
import { TaskContext } from "../task/task-context";
import { CommentType } from "../../types/global";
const taskStatuses: string[] = ["TODO", "In Progress", "Testing", "Done"];

export const CommentsProvider: FC<ProviderType> = ({ children }) => {
  const { tasks } = useContext(TaskContext);

  const [comments, setComments] = useState<CommentType>();

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
