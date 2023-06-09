import { ICONS } from "../../../constants/icons";
import { AuthorType } from "../../../types/modal";
import "./author.css";
import { FC, ChangeEvent } from "react";

export const Author: FC<AuthorType> = ({ setAuthor, author, onCloseModal }) => {
  const handleAuthorCreation = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleCloseModal = () => {
    onCloseModal(false);
  };

  const displayDoneIcon = () => {
    return (
      <button type="submit" onClick={handleCloseModal}>
        {ICONS.done()}
      </button>
    );
  };
  return (
    <div className="author">
      <h2>Пожалуйста, укажите ваше имя</h2>
      <p>
        Это приложение не использует Cookie, но использует ваше имя как автора
        задач и коментариев
      </p>
      <div className="author__form">
        <input
          className="author__input"
          type="text"
          placeholder="Укажите ваше имя"
          onChange={handleAuthorCreation}
          value={author}
        />
        {author.length > 2 && displayDoneIcon()}
      </div>
    </div>
  );
};
