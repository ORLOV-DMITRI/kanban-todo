import { AuthorContext } from "../../context/author/author-context";
import { HeaderType } from "../../types/header/header";
import "./header.css";
import { FC, useContext } from "react";

export const Header: FC<HeaderType> = ({ hasAuthor, onModalStateChange }) => {
  const { author, authorDelete } = useContext(AuthorContext);

  const handleDelete = () => {
    authorDelete();
    onModalStateChange(true);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__logo">
            <div className="logo"></div>
          </li>
          <li className="header__author">
            <h3>{hasAuthor || author}</h3>
            <div className="author-icon"></div>
          </li>
          <li className="header__icon">
            <div className="exit-icon" onClick={handleDelete}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
