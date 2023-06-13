import { FC } from "react";
import "../../modal.css";
import { AuthorModalType } from "../../../../types/modal-window/author/author";

export const AuthorModal: FC<AuthorModalType> = ({
  children,
  hasAuthor,
  onToggleModal,
}) => {
  const handleModalToggle = () => {
    onToggleModal(hasAuthor);
  };
  return (
    <div
      className={hasAuthor ? "card-modal active" : "card-modal"}
      onClick={handleModalToggle}
    >
      <div
        className={
          hasAuthor ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
