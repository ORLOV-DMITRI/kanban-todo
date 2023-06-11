import { FC, ChangeEvent, useState, KeyboardEvent } from "react";

export type FormEditType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
  descriptionDelete: () => void;
  description: string;
};
export const FormEdit: FC<FormEditType> = ({
  onChangeDescription,
  descriptionSave,
  descriptionDelete,
  description,
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      descriptionSave();
      setIsEdited(!isEdited);
    }
    if (e.ctrlKey && e.code === "NumpadEnter") {
      descriptionSave();
      setIsEdited(!isEdited);
    }
  };

  const handleBlur = () => {
    setIsEdited(!isEdited);
    descriptionSave();
  };
  if (isEdited) {
    return (
      <div>
        <div>
          <textarea
            defaultValue={description}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={onChangeDescription}
          />
        </div>
        <div>
          <button onClick={descriptionSave}>Сохранить</button>
          <button onClick={() => setIsEdited(!isEdited)}>Отменить</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div></div>
      <p>{description}</p>
      <div>
        <button onClick={() => setIsEdited(!isEdited)}>Изменить</button>
        <button onClick={descriptionDelete}>Удалить</button>
      </div>
    </div>
  );
};
