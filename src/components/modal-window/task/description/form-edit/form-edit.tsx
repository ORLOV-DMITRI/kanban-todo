import { FC, ChangeEvent, useState, KeyboardEvent, FocusEvent } from "react";

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
  const handleSaveDescription = () => {
    descriptionSave();
    setIsEdited(!isEdited);
  };

  const handleBlur = () => {
    setIsEdited(!isEdited);
    descriptionSave();
  };
  if (isEdited) {
    return (
      <div className="description__edit">
        <div>
          <textarea
            className="description__textarea"
            defaultValue={description}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={onChangeDescription}
          />
        </div>
        <div>
          <button
            className="description__btn-done"
            onClick={handleSaveDescription}
          >
            Сохранить
          </button>
          <button
            className="description__btn-cancel"
            onClick={handleSaveDescription}
          >
            Отменить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="description__text">
      <p onClick={() => setIsEdited(!isEdited)}>{description}</p>
      <div>
        <button
          className="description__btn-done"
          onClick={() => setIsEdited(!isEdited)}
        >
          Изменить
        </button>
        <button className="description__btn-cancel" onClick={descriptionDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
};
