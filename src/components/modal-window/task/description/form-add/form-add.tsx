import { FC, ChangeEvent } from "react";

export type FormAddType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
};
export const FormAdd: FC<FormAddType> = ({
  onChangeDescription,
  descriptionSave,
}) => {
  return (
    <div>
      <textarea
        onChange={onChangeDescription}
        onBlur={descriptionSave}
        placeholder="Добавить более подробное описание"
      ></textarea>
      <div>
        <button onClick={descriptionSave}>Сохранить</button>
      </div>
    </div>
  );
};
