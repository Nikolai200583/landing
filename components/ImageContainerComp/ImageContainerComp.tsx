import { SvgComponent } from "../SvgComponent/SvgComponent";
import "./style.css";
const ImageContainerComp = () => {
  return (
    <div className="container__svg">
       <SvgComponent className={"curl-bog"} pathName={"curl-bog"} />
       <SvgComponent className={"comp"} pathName={"comp"} />
       <SvgComponent className={"play"} pathName={"play"} />      
       <SvgComponent className={"electro"} pathName={"electro"} />
       <SvgComponent className={"spam1"} pathName={"spam1"} />    
    </div>
  );
};
export { ImageContainerComp };
