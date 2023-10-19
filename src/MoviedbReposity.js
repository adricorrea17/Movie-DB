async function getResults(url) {
    try {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkNjUwZTQ3NDk0ZDljMDgyZGNhNWJiZTM3NDM4MSIsInN1YiI6IjYyNzE1YjEyNzJkODU1MWE0OTdiN2I5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ziLPXaiXCBvXm0aEpqbNPaTaCMsbwtNLAZCA6zscbv4';
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', Authorization: 'Bearer ' + apiKey }
        };
        const response = await fetch(url, options);
        const responseData = await response.json();

        return responseData;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export async function getMovies(genreId = null) {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres='
                 + genreId;
    const results = await getResults( url );
    if( !results.results ) return [];

    const notNullResults = results.results.filter(objeto => (objeto.id !== null));
    const sliceResults = notNullResults.slice(0, 20);

    return sliceResults;
}

export async function getMovie(movieId = null) {
    if( !movieId ) return {};
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const results = await getResults( url ); 

    return results;
}


export async function getGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=es';
    const results = await getResults( url );
    if( !results.genres ) return [];

    return results.genres;
}
export async function SearchMovies(movie = ''){
      const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
      const results = await getResults( url );
      return results
}
