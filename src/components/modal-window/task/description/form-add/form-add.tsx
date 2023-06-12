import { FC, ChangeEvent, KeyboardEvent } from "react";

export type FormAddType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
  description: string;
};
export const FormAdd: FC<FormAddType> = ({
  onChangeDescription,
  descriptionSave,
  description,
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
    <div className="description__add">
      <textarea
        className="description__textarea"
        onChange={onChangeDescription}
        onBlur={descriptionSave}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Добавить более подробное описание"
      ></textarea>
      <div>
        {description.length > 0 && (
          <button onClick={descriptionSave}>Сохранить</button>
        )}
      </div>
    </div>
  );
};
