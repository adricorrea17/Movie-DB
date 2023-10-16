import React, { useEffect, useState } from "react";
import { getMovie } from "../MoviedbReposity";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function MovieDetails() {
    const [data, setData] = useState({});

    const { movieId } = useParams();

    useEffect(() => {
        const asycFn = async () => {
            console.dir(movieId);
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
        <article>
            <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
            <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <a href={`${data.homepage}`}>Pagina</a>
            <Link to='/'>Volver</Link>
        </article>
    );

}