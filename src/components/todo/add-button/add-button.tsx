import { FC } from "react";
import "./add-button.css";
import { useState } from "react";
import { FormAdd } from "../form-add/form-add";
import { AddButtonType } from "../../../types/todo/todo";

export const AddButton: FC<AddButtonType> = ({ status }) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  if (isFormOpen) {
    return <FormAdd status={status} onCloseForm={handleFormState} />;
  }

  return (
    <button className="todo__btn-add" onClick={handleFormState}>
      <span>Добавить карточку</span>
    </button>
  );
};
