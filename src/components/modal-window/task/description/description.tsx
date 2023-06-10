import { FC } from "react";
import { ICONS } from "../../../../constants/icons";
type DescriptionType = {
  description: string;
};
export const Description: FC<DescriptionType> = ({ description }) => {
  const addDescriptionForm = () => {
    return (
      <textarea
        autoFocus
        placeholder="Добавить более подробное описание"
      ></textarea>
    );
  };
  return (
    <div className="task__description">
      <div className="task__info">
        {ICONS.description()}
        <h3>Описание</h3>
        <button>Изменить</button>
      </div>
      <div>{description.length > 0 ? description : addDescriptionForm()}</div>
    </div>
  );
};
