import { Link, useLocation } from "react-router-dom";
import { route, removePathLanguage } from "../lang";

export default function SelectLenguages() {
    const current = useLocation();

    const currentWihoutLanguage = removePathLanguage( current.pathname );
    
    return (
        <div className="flex gap-4">
            <Link to={route(currentWihoutLanguage,'es')}><img className="w-6" src="https://adricorrea17.github.io/Movie-DB/img/spain.png" alt="Español" /></Link>
            <Link to={route(currentWihoutLanguage,'en')}><img className="w-6" src="https://adricorrea17.github.io/Movie-DB/img/united-states.png" alt="English" /></Link>
            <Link to={route(currentWihoutLanguage,'pt')}><img className="w-6" src="https://adricorrea17.github.io/Movie-DB/img/portugal.png" alt="Português" /></Link>
        </div>
    )
}