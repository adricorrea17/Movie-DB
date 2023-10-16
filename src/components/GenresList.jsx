import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { getGenres } from "../MoviedbReposity";

export default function GenresList() {
    const [genres, setGenres] = useState([]);
    const [loadedGenres, setLoadedGenres] = useState(4);
    
    useEffect(() => {
        const asycFn = async () => {
            setGenres( await getGenres() );
        };
        asycFn();
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (
                window.scrollY + window.innerHeight >= document.documentElement.scrollHeight &&
                loadedGenres < genres.length
            ) {
               
                const newLoadedGenres = loadedGenres + 4;
                setLoadedGenres(newLoadedGenres);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadedGenres, genres]);


    return (
        <>
            {genres.slice(0, loadedGenres).map((genre) => (
                <MovieList key={genre.id} genreName={genre.name} genreId={genre.id} />
            ))}
        </>
    );
    
}
