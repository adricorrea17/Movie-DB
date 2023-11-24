import Movie from "../components/Movie";
import Genres from "../components/GenresList";
import { Fade } from "react-awesome-reveal";
import { _ } from "../lang";

export default function MovieList( {movies, title, isNotLoading} ){
    return (
        <section className="px-6 md:px-12 mx-auto container">
          <Genres />
          {movies.length !== 0 && (
            <h1 className="text-white text-center text-2xl md:text-4xl mb-8 md:mb-12">
              {_("Resultados de búsqueda")}: <b>{title}</b>
            </h1>
          )}
      
          {movies.length === 0 ? (
            <h1 className="text-white text-center text-2xl md:text-4xl">
              {_("No se encontraron películas")}.
            </h1>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {movies.map((movie) => (
                <Fade key={movie.id}>
                  <Movie movie={movie} />
                </Fade>
              ))}
      
              {isNotLoading && (
                <>
                  {[...Array(15)].map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse rounded-xl bg-dark2 h-[40vh]"
                    ></div>
                  ))}
                </>
              )}
            </div>
          )}
        </section>
      );
}