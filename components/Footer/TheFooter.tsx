const TheFooter = () => {
  return (
    <footer className="footer">
      <section className="footer__section_hi">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-logo"></use>
        </svg>
        <div className="iconBlock">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-tube"></use>
          </svg>
          <svg>
            <use xlinkHref="img/sprite.svg#icon-VK"></use>
          </svg>
          <svg>
            <use xlinkHref="img/sprite.svg#icon-tg"></use>
          </svg>
        </div>
        <button>наверх</button>
      </section>
      <section></section>
      <section>
        <p>© ООО “НЕОФЭМИЛИ”</p>
        <p>ИНН: 7813660849</p>
        <p>КПП: 781301001</p>
        <p>ОГРН: 1227800019105</p>
      </section>
    </footer>
  );
};
export { TheFooter };
