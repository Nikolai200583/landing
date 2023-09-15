import "./style.css";
import { animated } from '@react-spring/web'

const ImageContainerComp = () => {
  return (
    <div className="container__svg">
      <svg className="curl-bog">
        <use xlinkHref="img/sprite.svg#curl-bog"></use>
      </svg>
      <svg className="comp">
        <use xlinkHref="img/sprite.svg#comp"></use>
      </svg>
      <svg className="play">
        <use xlinkHref="img/sprite.svg#play"></use>
      </svg>
      
      <svg className="electro">
        <use xlinkHref="img/sprite.svg#electro"></use>
      </svg>
      <svg className="spam1">
        <use xlinkHref="img/sprite.svg#spam1"></use>
      </svg>     
    </div>
  );
};
export { ImageContainerComp };
