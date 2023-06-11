import { FC, useState, ChangeEvent, FocusEvent } from "react";
import { ICONS } from "../../../../constants/icons";
import { TaskType } from "../../../../types/global";
import { FormAdd } from "./form-add/form-add";
import { FormEdit } from "./form-edit/form-edit";
import { TaskDetailType } from "../../../../types/modal";

export const Description: FC<TaskDetailType> = ({ task, taskUpdate }) => {
  const [description, setDescription] = useState<string>(task.description);
  // const [isDescription, setIsDescription] = useState<boolean>(
  //   task.description.length > 0 ? true : false
  // );
  // console.log(description);

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
