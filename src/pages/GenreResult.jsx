import { getMovies } from "../MoviedbReposity";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { useLang } from "../components/Layout";


export default function GenreResult() {
  const { genreId } = useParams();
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [isNotLoading, setisNotLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const lang = useLang()

  useEffect(() => {
    const asyncFn = async () => {
      const moviesData = await getMovies(genreId);
      setMovies(moviesData);
      setisNotLoading(false);
    };

    asyncFn();
  }, [genreId, lang]); 

  const nextPage = async () => {
    if (!hasNext) return;

    let next = page + 1;
    const nextResults = await getMovies(genreId, next);

    setisNotLoading(false)

    if (nextResults.length === 0) {
      setHasNext(false);
      return;
    }

    setPage(next);
    const results = movies.concat(nextResults);
    setMovies(results);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      hasNext
    ) {
      setisNotLoading( true );
      nextPage();
    }
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);
  

  return (
    <MovieList movies={movies} title={genre} isNotLoading={isNotLoading} />
  );
}
