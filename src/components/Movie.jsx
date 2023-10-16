import { Link } from "react-router-dom";

export default function Movie({ movie }) {

    return (
        <Link to={'movie/'+movie.id}>
            <article className="group cursor-pointer relative w-full grid h-[28rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')` }}>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full group-hover:scale(1.2) duration-300 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 py-8 px-6 md:px-8">
                    <h2 className="group-hover:hidden mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        {movie.title}
                    </h2>
                    <h3 className="group-hover:block hidden mb-6 font-sans tracking-normal text-white antialiased text-clip overflow-hidden h-32 pt-1">
                        {movie.overview}
                    </h3>
                </div>
            </article>
        </Link>
    );
}