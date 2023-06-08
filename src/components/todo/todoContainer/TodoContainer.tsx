import { FC, useContext } from "react";
import "./TodoContainer.css";
import { StatusContext } from "../../../context/StatusContext";
import { StatusContextType } from "../../../@types/globalType";
import TodoColumn from "../todoColumn/TodoColumn";

const TodoContainer = () => {
  const { statuses } = useContext(StatusContext) as StatusContextType;
  return (
    <div className="todo">
      {statuses.map((status: string) => {
        return <TodoColumn status={status} key={status} />;
      })}
    </div>
  );
};

export default TodoContainer;
