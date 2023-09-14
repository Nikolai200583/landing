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
        <a className="footer__up" href="#">Наверх</a>
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
