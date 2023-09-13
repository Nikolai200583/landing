import "./style.css";
type props = {
  text: string;
  key: string;
};

const ButtonItems = ({ text }: props) => {
  return (
    <a href="#" className="button__items">
      {text}
    </a>
  );
};
export { ButtonItems };
