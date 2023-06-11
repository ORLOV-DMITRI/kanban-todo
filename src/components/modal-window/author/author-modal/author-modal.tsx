import { FC } from "react";
import "../../modal.css";
import { AuthorModalType } from "../../../../types/modal";

export const AuthorModal: FC<AuthorModalType> = ({
  children,
  isActive,
  onCloseModal,
}) => {
  const handleModalClose = () => {
    onCloseModal(isActive);
  };
  return (
    <div
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={handleModalClose}
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
