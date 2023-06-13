import { ICONS } from "../../../constants/icons";
import "./author.css";
import { FC, ChangeEvent, useContext, useState, KeyboardEvent } from "react";
import { AuthorContext } from "./../../../context/author/author-context";
import { AuthorType } from "../../../types/modal-window/author/author";

export const Author: FC<AuthorType> = ({ onModalStateChange }) => {
  const { authorSave } = useContext(AuthorContext);
  const [currentAuthor, setCurrentAuthor] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentAuthor(e.target.value);
  };

  const handleSave = () => {
    authorSave(currentAuthor);
    onModalStateChange(false);
    setCurrentAuthor("");
  };
  const handleKeyEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleSave();
    }
  };

  const showButton = () => {
    return (
      <button type="submit" onClick={handleSave}>
        {ICONS.done()}
      </button>
    );
  };
  return (
    <div className="author">
      <h2>Пожалуйста, укажите ваше имя</h2>
      <p>
        Это приложение не использует Cookie, но использует ваше имя как автора
        задач и комментариев
      </p>
      <div className="author__form">
        <input
          className="author__input"
          type="text"
          placeholder="Укажите ваше имя"
          onChange={handleChange}
          value={currentAuthor}
          onKeyDown={handleKeyEvent}
          autoFocus
        />
        {currentAuthor.length > 2 && showButton()}
      </div>
    </div>
  );
};
