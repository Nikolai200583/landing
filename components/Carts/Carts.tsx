import { SvgComponent } from "../SvgComponent/SvgComponent";
import "./style.css";

type NewProps = {
  title: string;
  text: string;
  link: string;
  span: string;
};

const Carts = ({ title, text, link, span }: NewProps) => {
  return (
    <div className="container__carts">
      <div className="container__header_carts">
        <span className="container__header_carts_span">{span}</span>
        <SvgComponent className={"three"} pathName={"three"} />
      </div>
      <h3 className="container__title_carts">{title}</h3>
      <p className="container__text_carts">{text}</p>
      <a className="container__link_carts" href="#">
        {link}
      </a>
    </div>
  );
};
export { Carts };
