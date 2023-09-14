import "./style.css";

const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__section_hi">
        <div className="footer__icon_logo">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-logo"></use>
          </svg>
        </div>
        <div className="iconBlock">
          <div className="footer__icon">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-tube"></use>
            </svg>
          </div>
          <div className="footer__icon">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-VK"></use>
            </svg>
          </div>
          <div className="footer__icon">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-tg"></use>
            </svg>
          </div>
        </div>
        <a className="footer__up" href="#">
        <svg className="up">
              <use xlinkHref="img/sprite.svg#up"></use>
            </svg>
          Наверх
        </a>
      </div>
      <div className="footer__section_midle">
        <div className="section__midle_left">
          <div className="section__midle_phone">
            <h2 className="midle_title">Выслушаем и поможем 😉✌</h2>
            <span className="midle__span midle_phone">
              <svg className="phone">
                <use xlinkHref="img/sprite.svg#phone"></use>
              </svg>
              +7 (952) 722-87-33
            </span>
            <span className="midle__span midle_mail">
              <svg className="mail">
                <use xlinkHref="img/sprite.svg#mail"></use>
              </svg>
              school@neofamily.ru
            </span>
            <p className="midle__text">
              197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ
              Посадский, ул. Рентгена, д. 9Б, помещ. 1-Н, офис 9
            </p>
          </div>
          <div className="section__midle_licenssion">
            <div className="section__midle_gos">
              <svg className="license">
                <use xlinkHref="img/sprite.svg#license"></use>
              </svg>
              <p className="midle__gos_text">Государственная лицензия</p>
            </div>
            <div className="section__midle_skolkovo">
              <svg className="skypro">
                <use xlinkHref="img/sprite.svg#skypro"></use>
              </svg>
              <p className="midle__gos_text">Участник Skolkovo</p>
            </div>
          </div>
        </div>

      </div>
      <div className="footer__recuisit">
        <p>© ООО “НЕОФЭМИЛИ”</p>
        <p>ИНН: 7813660849</p>
        <p>КПП: 781301001</p>
        <p>ОГРН: 1227800019105</p>
      </div>
    </footer>
  );
};
export { TheFooter };
