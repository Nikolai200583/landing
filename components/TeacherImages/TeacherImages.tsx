import { SvgComponent } from "../SvgComponent/SvgComponent";
import "./style.css";


const TeacherImages = () => {
  return (
    <div className="container__svg_tech">
       <SvgComponent className={"formula1"} pathName={"formula1"} />
       <SvgComponent className={"formula2"} pathName={"formula2"} />
       <SvgComponent className={"teach"} pathName={"teach"} />
       <SvgComponent className={"this"} pathName={"this"} />      
    </div>
  );
};
export { TeacherImages };
