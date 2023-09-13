import "./style.css";

const SmartDirectory = () => {
  return (
    <div className="smart__container">
      <div className="smart__top">
        <svg className="back">
          <use xlinkHref="img/sprite.svg#back"></use>
        </svg>
        <span className="smart__span_header">Умный справочник</span>
      </div>
      <span className="smart__span">
        Тема: Прокариоты Раздел: Одноклеточные организмы
      </span>
      <h2 className="smart__title">ПРОКАРИОТЫ: Бактерии и цианобактерии</h2>
      <div className="smart__span_box">
        <span className="smart__span_1">Статья №552</span>
        <span className="smart__span_2">Не изучено</span>
      </div>
      <h3 className="smart__title_sub">Cтроение и общая информация</h3>
      <p className="smart__title_text">
        Бактерии — это прокариоты. У них нет ядра, нет мембранных органоидов. У
        некоторых видов бактерий вместо мембранных органоидов имеются впячивания
        мембраны. Они позволяют увеличить поверхность мембраны. Их функции:
      </p>
      <ul className="smart__title_orderList">
        <li className="smart__title_list">Удерживают нуклеоид в цитоплазме</li>
        <li className="smart__title_list">Контролируют процесс деления </li>
        <li className="smart__title_list">Содержат ферменты для синтеза АТФ</li>
        <li className="smart__title_list">
          Осуществляют фотосинтез у цианобактерий (синезелёные водоросли —
          прокариоты)
        </li>
      </ul>
      <div className="smart__image"></div>
    </div>
  );
};
export { SmartDirectory };
