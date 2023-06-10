import { FC } from "react";
import { ICONS } from "../../../../constants/icons";
import { TaskType } from "../../../../types/global";

type TitleType = {
  title: string;
};

export const Title: FC<TitleType> = ({ title }) => {
  return (
    <div className="task__title">
      {ICONS.title()}
      <div className="task__title-input">
        <input type="text" defaultValue={title} />
      </div>
    </div>
  );
};
