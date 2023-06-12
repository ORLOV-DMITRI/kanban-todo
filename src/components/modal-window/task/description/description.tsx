import { FC, useState, ChangeEvent, FocusEvent, useContext } from "react";
import { ICONS } from "../../../../constants/icons";
import { FormAdd } from "./form-add/form-add";
import { FormEdit } from "./form-edit/form-edit";
import { TaskDetailType } from "../../../../types/modal";
import { TaskContext } from "../../../../context/task/task-context";

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
      />
    );
  };
  return (
    <div className="task__description">
      <div className="task__info">
        {ICONS.description()}
        <h3>Описание</h3>
      </div>
      <div className="description__form">{formSelection()}</div>
      <div>
        {/* <button>Сохранить</button>
        <button>Отмена</button> */}
      </div>
    </div>
  );
};
