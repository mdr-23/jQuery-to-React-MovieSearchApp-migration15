export function getMovies(movieName){
    return fetch(`http://www.omdbapi.com/?apikey=80ba4f2b&s=${movieName}`).then((res)=>res.json())
}

export function getMoviesDetails(imdbID){
    return fetch(`http://www.omdbapi.com/?apikey=80ba4f2b&i=${imdbID}&plot=full`).then((res)=>res.json())
}