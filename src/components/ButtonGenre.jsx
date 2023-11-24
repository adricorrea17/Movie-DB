import { Link } from "react-router-dom"
import { route } from "../lang"

export default function ButtonGenre({ genre }){
    return(
        <Link className="my-3 px-4 py-2 bg-dark2 w-max rounded-xl border border-dark hover:text-accent text-primary" to={route('generos/' + genre.id + '/' + genre.name)}>{genre.name}</Link>
    )
}