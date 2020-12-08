export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  
  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTopratedMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const postMovierating = (id,value) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&guest_session_id=34c558276d1a2063b442805450cd635a&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  

  export const deleteMovierating = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&guest_session_id=34c558276d1a2063b442805450cd635a&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  export const getRatedMovies= ()=> {
    return fetch(
      `https://api.themoviedb.org/3/guest_session/d3f74ec47c9c78ed626218917c84a986/rated/movies?api_key=ac30d257ab5fd18bd93513cf9e6e27b9&language=en-US&sort_by=created_at.asc`
    )
      .then(res => res.json())
      .then(json => json.results);
  };// ok Array[]
  
  export const getSimilarMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  
  export const getPerson = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json());
  };

  export const getPopulerPerson = id => {
    return fetch(
      ` https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
 

console.log(getPopulerPerson());