import { ICONS } from "../../../constants/icons";
import { AuthorType } from "../../../types/modal";
import "./author.css";
import { FC, ChangeEvent, useContext, useState } from "react";
import { AuthorContext } from "./../../../context/author/author-context";

export const Author: FC<AuthorType> = ({ setAuthor, onCloseModal }) => {
  const { author, authorSave } = useContext(AuthorContext);
  const [currentAuthor, setCurrentAuthor] = useState<string>("");
  // const handleAuthorCreation = (e: ChangeEvent<HTMLInputElement>) => {
  //   setAuthor(e.target.value);
  // };
  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentAuthor(e.target.value);
  };

  const handleCloseModal = () => {
    authorSave(currentAuthor);
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
          onChange={handleAuthorChange}
          value={currentAuthor}
        />
        {currentAuthor.length > 2 && displayDoneIcon()}
      </div>
    </div>
  );
};
