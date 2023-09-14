import "./style.css";
import Link from "next/link";
const TheHeader = () => {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__box_logo">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-logo"></use>
          </svg>
        </div>
        <div className="header__box_link">
          <Link href="/items">Предметы</Link>
          <Link href="/theory">Теория</Link>
          <Link href="/repetition">Повторение</Link>
          <Link href="/tests">Тесты</Link>
        </div>
      </div>
      <a href="#" className="header__button">
        <svg className="iconContainer">
          <use xlinkHref="img/sprite.svg#iconContainer"></use>
        </svg>
        В банк знаний
      </a>
    </header>
  );
};
export { TheHeader };
