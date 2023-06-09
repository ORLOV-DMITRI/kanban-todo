import "./header.css";

type HeaderType = {};
export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__logo">
            <div className="logo"></div>
          </li>
          <li className="header__author">
            <h3>Author Name</h3>
            <div className="author-icon"></div>
          </li>
          <li className="header__icon">
            <div className="exit-icon"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
