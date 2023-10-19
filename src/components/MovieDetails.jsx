import React, { useEffect, useState } from "react";
import { getMovie,  SearchMovies } from "../MoviedbReposity";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function MovieDetails() {
    const [data, setData] = useState({});

    const { movieId } = useParams();

    useEffect(() => {
        const asycFn = async () => {
            
            const movie = await getMovie(movieId);
            setData(movie);
        }
        asycFn()
    }, [movieId]);


    if (!data) {
        return <article>loading...</article>
    }
    console.log(data)
    return (
        <section className="container mx-auto items-center grid grid-cols-2">
            <picture className="mx-auto">
                <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </picture>
            <div className="my-auto text-white flex flex-col gap-5">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-xl">{data.overview}</p>
                <a id="pagina" href={`${data.homepage}`}><label htmlFor="pagina" className="text-lg">Pagina:</label> {data.homepage}</a>
                <Link to='/' className="bg-gray-400  w-4/12 text-center py-1 rounded-lg">Volver</Link>
            </div>
        </section>

    );

}