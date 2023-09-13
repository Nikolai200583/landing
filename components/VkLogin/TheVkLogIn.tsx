import './style.css'

type NewProps = {
    title: string;
    text: string;
    buttonTextVk: string;
    buttonTextEnter: string

  };
  
  const TheVkLogIn = ({ title, text, buttonTextVk, buttonTextEnter }: NewProps) => {
    return (
      <div className="container__vk">
        <h1 className="container__title_vk">{title}</h1>
        <p className="container__text_vk">{text}</p>
        <div className='buttonBox_vk'>
        <button className="container__button_vk">{buttonTextVk}</button>
        <button className="container__button_enter">{buttonTextEnter}</button>
        </div>
      </div>
    );
  };
  export { TheVkLogIn};
  