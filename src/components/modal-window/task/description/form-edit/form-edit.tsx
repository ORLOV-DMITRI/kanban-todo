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
  const [isEdit, setIsEdit] = useState(false);
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      descriptionSave();
      setIsEdit(!isEdit);
    }
    if (e.ctrlKey && e.code === "NumpadEnter") {
      descriptionSave();
      setIsEdit(!isEdit);
    }
  };

  const handleBlur = () => {
    setIsEdit(!isEdit);
    descriptionSave();
  };
  if (isEdit) {
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
          <button onClick={() => setIsEdit(!isEdit)}>Отменить</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div></div>
      <p>{description}</p>
      <div>
        <button onClick={() => setIsEdit(!isEdit)}>Изменить</button>
        <button onClick={descriptionDelete}>Удалить</button>
      </div>
    </div>
  );
};
