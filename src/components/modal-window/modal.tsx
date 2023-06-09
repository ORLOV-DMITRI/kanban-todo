import { FC } from "react";
import "./modal.css";
import { ModalType } from "../../types/modal";

export const Modal: FC<ModalType> = ({ children, isActive, onCloseModal }) => {
  const openCardModalHandler = () => {
    onCloseModal(isActive);
  };
  return (
    <div
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={openCardModalHandler}
    >
      <div
        className={
          isActive ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
