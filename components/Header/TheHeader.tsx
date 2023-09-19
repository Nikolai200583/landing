import { SvgComponent } from "../SvgComponent/SvgComponent";
import "./style.css";
import Link from "next/link";
const TheHeader = () => {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__box_logo">
          <Link href="/">
            <SvgComponent pathName={"icon-logo"} />
          </Link>
        </div>
        <div className="header__box_link">
          <Link href="/items">Предметы</Link>
          <Link href="/theory">Теория</Link>
          <Link href="/repetition">Повторение</Link>
          <Link href="/tests">Тесты</Link>
        </div>
      </div>
      <a href="#" className="header__button">
        <SvgComponent className={"iconContainer"} pathName={"iconContainer"} />В
        банк знаний
      </a>
    </header>
  );
};
export { TheHeader };
