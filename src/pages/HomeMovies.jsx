import React, { useEffect, useState } from "react";
import MovieSwiper from "../components/MovieSwiper";
import { getGenres } from "../MoviedbReposity";
import Genres from "../components/GenresList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useLang } from "../components/Layout";


export default function HomeMovies() {
    const [genres, setGenres] = useState([]);
    const [loadedGenres, setLoadedGenres] = useState(4);
    const [isNotLoading, setisNotLoading] = useState(true);
    const lang = useLang()
    
    useEffect(() => {
        const asycFn = async () => {
            setGenres(await getGenres());
            setisNotLoading(false);
        };
        asycFn();
    },[lang]);

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

    if (isNotLoading) {
        return <Loading />;
    }
    return (
        <> 
            <Genres />
            {genres.slice(0, loadedGenres).map((genre) => (
                
            <MovieSwiper key={genre.id} genreName={genre.name} genreId={genre.id} />
        ))}
        </>
    );

}
