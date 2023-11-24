import { useParams } from "react-router-dom";
import { GetSearchs } from "../MoviedbReposity";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

export default function SearchResults() {
  const { keyword } = useParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const asyncFn = async () => {
      const search = await GetSearchs(keyword, 1);
      setSearchMovies(search);
      setIsLoading(false);
    };
    asyncFn();
  }, [keyword]);

  const nextPage = async () => {
    if (!hasNext) return;

    const next = page + 1;
    const nextResults = await GetSearchs(keyword, next);

    setIsLoading(false)

    if (nextResults.length === 0) {
      setHasNext(false);
      return;
    }

    setPage(next);
    setSearchMovies((prevMovies) => prevMovies.concat(nextResults));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      hasNext
    ) {
      setIsLoading( true );
      nextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <MovieList movies={searchMovies} title={keyword} isNotLoading={isLoading} />
  );
  
}
