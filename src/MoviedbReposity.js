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

export async function getMovies(genreId = null , page = 1) {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${window.lang.current}&page=${page}&sort_by=popularity.desc&with_genres=`
                 + genreId;
    const results = await getResults( url );
    if( !results.results ) return [];

    const notNullResults = results.results.filter(objeto => (objeto.id !== null && objeto.poster_path !== null));
    const sliceResults = notNullResults.slice(0, 20);

    return sliceResults;
}

export async function getMovie(movieId = null) {
    if( !movieId ) return {};

    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=${window.lang.current}`;
    const results = await getResults( url ); 

    return results;
}


export async function getGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=${window.lang.current}`;
    const results = await getResults( url );
    if( !results.genres ) return [];

    return results.genres;
}

export async function GetSearchs(movie = '', page = 1) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${window.lang.current}&page=${page}`
      const results = await getResults( url );

      const notNullResults = results.results.filter(objeto => (objeto.id !== null && objeto.poster_path !== null));
      const sliceResults = notNullResults.slice(0, 20);
      
      return sliceResults;
}

export async function GetTrailerMovie(id){

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=${window.lang.current}`
    const results = await getResults( url );

    const trailer = results.results.filter( function(item) {
        let condition = item.name === 'Official Trailer';
        return condition;
    });

    return trailer.length > 0 ? trailer[0] : results.results[0] ?? false;
}

export async function GetBannerImg(){
    const url = `https://api.themoviedb.org/3/movie/299054/images`
    const results = await getResults( url );
      return results
}

