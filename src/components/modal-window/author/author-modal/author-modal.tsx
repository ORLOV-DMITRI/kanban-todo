import { FC } from "react";
import "../../modal.css";
import { AuthorModalType } from "../../../../types/modal";

export const AuthorModal: FC<AuthorModalType> = ({
  children,
  currentState,
  onChangeState,
}) => {
  const handleChangeState = () => {
    onChangeState(currentState);
  };
  return (
    <div
      className={currentState ? "card-modal active" : "card-modal"}
      onClick={handleChangeState}
    >
      <div
        className={
          currentState ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
