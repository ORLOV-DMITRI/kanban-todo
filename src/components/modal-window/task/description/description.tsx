import { FC, useState, ChangeEvent, useContext } from "react";
import { ICONS } from "../../../../constants/icons";
import { FormAdd } from "./form-add/form-add";
import { FormEdit } from "./form-edit/form-edit";
import { TaskContext } from "../../../../context/task/task-context";
import "./description.css";
import { TaskDetailType } from "../../../../types/modal-window/task/task";

export const Description: FC<TaskDetailType> = ({ task }) => {
  const [description, setDescription] = useState<string>(task.description);
  const { taskUpdate } = useContext(TaskContext);

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const descriptionSave = () => {
    task.description = description;
    taskUpdate(task);
  };
  const descriptionDelete = () => {
    task.description = "";
    taskUpdate(task);
    setDescription("");
  };
  const formSelection = () => {
    if (task.description.length > 0) {
      return (
        <FormEdit
          onChangeDescription={handleChangeDescription}
          descriptionSave={descriptionSave}
          descriptionDelete={descriptionDelete}
          description={description}
        />
      );
    }
    return (
      <FormAdd
        onChangeDescription={handleChangeDescription}
        descriptionSave={descriptionSave}
        description={description}
      />
    );
  };
  return (
    <div className="description">
      <div className="description__info">
        {ICONS.description()}
        <h3>Описание</h3>

        <div className="description__form">{formSelection()}</div>
      </div>
    </div>
  );
};
