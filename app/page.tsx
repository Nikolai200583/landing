import { TheRegistrationFree } from "@/components/RegistrationFree/TheRegistrationFree";
import { TheVkLogIn } from "@/components/VkLogin/TheVkLogIn";
import { STATIC } from "./Static";
import { ButtonItems } from "@/components/ButtonItems/ButtonItems";
import { RegistrationForm } from "@/components/RegistrationForm/RegistrationForm";
import { ImageContainerComp } from "@/components/ImageContainerComp/ImageContainerComp";
import { Carts } from "@/components/Carts/Carts";


export default function Home() {
  return (
    <div className="wrapper__content">
      <section>
        <TheVkLogIn
         title={"NeoFamily — умная подготовка к ЕГЭ"}
         text={
           "Более 30 000 заданий по всем предметам ЕГЭ. Бесплатная теория, тесты и умное повторение"
         }
         buttonTextVk={"Войти через VK ID"}
         buttonTextEnter={"Войти"}
         /> 
         <RegistrationForm/>
         <ImageContainerComp/>   
      </section>
      <section>
        <div className="buttonsContainer">
        {STATIC.map((item)=>(
          <ButtonItems
          key={item}
          text={item}/>
        ))}
        </div>
        <TheRegistrationFree
          title={"Банк заданий по всем предметам"}
          text={
            "Десятки тысяч качественных заданий по твоим предметам. Формата ЕГЭ-2024, уровня сложности экзамена и выше, с ответами и пояснениями. Можно фильтровать по темам, линиям или использовать поиск! "
          }
          buttonText={"Зарегистрироваться бесплатно"}
          textAgain={'Выбирай предмет и переходи в Банк заданий прямо сейчас!'}
        />
      </section>
      <section>
        <TheRegistrationFree
          title={"Умные справочники"}
          text={
            "Вся нужная теория по темам ЕГЭ — на понятном языке и с дизайнерскими иллюстрациями. Идеально, чтобы создать фундамент знаний по предмету."
          }
          buttonText={"Зарегистрироваться бесплатно"}
        />
      </section>
      <section>
        <div className="cartsContainer">
        <Carts
        span={'Мой набор'}
        title={'Модульные уравнения'}
        text={'Карточек: 40'}
        link={'Открыть набор'}/>
        <Carts
        span={'Умный справочник'}
        title={'Сердечно-сосудистая система'}
        text={'Карточек: 40'}
        link={'Открыть набор'}/>
        </div>
      </section>
      <section>
        <TheRegistrationFree
          title={"Варианты и тесты"}
          text={
            "Наша платформа имеет 4 способа генерации тестов – это покрывает любые сценарии создания вариантов как лично учеником, так и преподавателем. Наш интерфейс безумно удобен и дружелюбен."
          }
          buttonText={"Зарегистрироваться бесплатно"}
        />
      </section>
      <section>
      <TheVkLogIn
         title={"Начни подготовку прямо сейчас!"}
         text={
           "Это бесплатно и точно тебе понравится."
         }
         buttonTextVk={"Войти через VK ID"}
         buttonTextEnter={"Войти"}
         />
      </section>
    </div>
  );
}
