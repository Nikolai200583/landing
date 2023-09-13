import './style.css'

type NewProps = {
  title: string;
  text: string;
  buttonText?: string;
  textAgain?: string;
};

const TheRegistrationFree = ({ title, text, buttonText, textAgain }: NewProps) => {
  return (
    <div className="container__free">
      <h3 className="container__title_free">{title}</h3>
      <p className="container__text_free">{text}</p>
      {textAgain ? <h3 className="container__textAgain_free">{textAgain}</h3> : <button className="container__button_free">{buttonText}</button>}
    </div>
  );
};
export { TheRegistrationFree };
