import "./style.css";

const SelectionsForm = () => {
  return (
    <div className="selections__container">
      <div className="selections__header">
        <span className="selections__header_span">Название варианта</span>
        <p className="selections__header_text">
          Решение линии 1-6 по математике
        </p>
      </div>
      <h2 className="selections__title">Задания</h2>
      <div className="selections__choise">
        <span className="selections__choise_span">Генерация</span>
        <p className="selections__choise_text">По конкретной линии задач</p>
      </div>
      <div className="selections__box">
        <div className="selections__items">
          <p className="selections__items_text">Раздел</p>
        </div>
        <div className="selections__items">
          <p className="selections__items_text">Часть</p>
        </div>
        <div className="selections__items">
          <p className="selections__items_text">Линия</p>
        </div>
      </div>
      <p className="selections__text">
        Укажите количество заданий для каждой выбранной темы по указанной линии.
      </p>
      <div className="selections__check">
        
      </div>
      <div className="selections__check">
        
      </div>
      <div className="selections__check">
        
      </div>
    </div>
  );
};
export { SelectionsForm };
