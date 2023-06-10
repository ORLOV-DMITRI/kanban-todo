import { HeaderType } from "../../types/header";
import "./header.css";
import { FC } from "react";

export const Header: FC<HeaderType> = ({
  author,
  displayAuthor,
  onDeleteAuthor,
}) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__logo">
            <div className="logo"></div>
          </li>
          <li className="header__author">
            <h3>{!displayAuthor && author}</h3>
            <div className="author-icon"></div>
          </li>
          <li className="header__icon">
            <div className="exit-icon" onClick={onDeleteAuthor}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
