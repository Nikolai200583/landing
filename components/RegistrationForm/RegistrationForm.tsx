import './style.css'

const RegistrationForm = () => {
  return (
    <div className="container__reg">
      <h2 className="container__title_reg">Регистрируйся, чтобы начать обучение</h2>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Пароль"></input>
      <input type="text" placeholder="Пароль еще раз"></input>
      <button className="container__button_reg">Зарегистрироватья</button>
      <p className="container__text_reg">Нажимая «Зарегистрироваться», вы выражаете согласие на обработку персональных данных, а также подтверждаете ознакомление и согласие с условиями Оферты и Политики конфиденциальности.</p>
    </div>
  );
};
export { RegistrationForm };
