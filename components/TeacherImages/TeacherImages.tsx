import "./style.css";


const TeacherImages = () => {
  return (
    <div className="container__svg_tech">
      <svg className="formula1">
        <use xlinkHref="img/sprite.svg#formula1"></use>
      </svg>
      <svg className="formula2">
        <use xlinkHref="img/sprite.svg#formula2"></use>
      </svg>
      <svg className="teach">
        <use xlinkHref="img/sprite.svg#teach"></use>
      </svg>
      <svg className="this">
        <use xlinkHref="img/sprite.svg#this"></use>
      </svg>
     
      
    </div>
  );
};
export { TeacherImages };
