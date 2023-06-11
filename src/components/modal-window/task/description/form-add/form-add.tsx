import { FC, ChangeEvent, KeyboardEvent } from "react";

export type FormAddType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
};
export const FormAdd: FC<FormAddType> = ({
  onChangeDescription,
  descriptionSave,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      descriptionSave();
    }
    if (e.ctrlKey && e.code === "NumpadEnter") {
      descriptionSave();
    }
  };
  return (
    <div>
      <textarea
        onChange={onChangeDescription}
        onBlur={descriptionSave}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Добавить более подробное описание"
      ></textarea>
      <div>
        <button onClick={descriptionSave}>Сохранить</button>
      </div>
    </div>
  );
};
