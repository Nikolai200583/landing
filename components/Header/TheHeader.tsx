
import './style.css'
import Link from "next/link";
const TheHeader = () => {  
  return (
    <header className='header'> 
      <div className="linkBox">   
      <svg className="logo">
        <use xlinkHref="img/sprite.svg#icon-logo"></use>
      </svg>
      
      <Link href="/items">Предметы</Link>
      <Link href="/theory">Теория</Link>
      <Link href="/repetition">Повторение</Link>
      <Link href="/tests">Тесты</Link>  
      </div>  
    </header>
  );
};
export { TheHeader };
