import { FC, FocusEvent, useState, ChangeEvent, useContext } from "react";
import { ICONS } from "../../../../constants/icons";
import { TaskType } from "../../../../types/global";
import { TaskContext } from "../../../../context/task/task-context";

type TitleType = {
  task: TaskType;
  onChangeTitle: (title: string) => void;
  title: string;
};

export const Title: FC<TitleType> = ({ task, onChangeTitle, title }) => {
  console.log("Приходит : " + title);
  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();
  const handleKeyEvent = (e: any) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  };
  // const handleSaveTitle = () => {
  //   task.title = newTitle;
  //   taskUpdate(task);
  // };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeTitle(e.target.value);
  };
  return (
    <div className="task__title">
      {ICONS.title()}
      <div className="task__title-input">
        <input
          type="text"
          value={title}
          onFocus={handleTextSelect}
          onKeyDown={handleKeyEvent}
          onChange={handleChangeTitle}
          // onBlur={handleSaveTitle}
        />
      </div>
    </div>
  );
};
