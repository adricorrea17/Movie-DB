import { Link } from "react-router-dom";
import { route } from "../lang";

export default function Movie({ movie }) {
    return (
        <Link to={route( 'movie/' + movie.id )}>
            <article className=" bg-dark2 group cursor-pointer relative grid h-[35vh] md:h-[40vh] w-full flex-col items-end justify-center overflow-hidden rounded-xl ring-inset hover:border-2 hover:border-primary bg-clip-border text-center text-gray-700 ">
                {movie.poster_path != null && (
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')` }}>
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full group-hover:scale(1.2) duration-300 bg-black bg-opacity-25 hover:bg-transparent">

                        </div>
                    </div>
                )}
            </article>
        </Link>
    );
}