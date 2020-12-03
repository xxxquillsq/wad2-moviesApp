import React, { useEffect, createContext, useReducer } from "react";
import { getMovies ,getUpcomingMovies, getLatestMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],//exercise3
       
      };

      case "add-watchlist":
        return {
          upcoming: state.upcoming.map((m) =>
            m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
          ),
          movies: [...state.movies],
          
        };//exercise4

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming],latest:[...state.latest] };//
      case "load-upcoming":
        return { upcoming: action.payload.upcoming, movies: [...state.movies],latest:[...state.latest] };//movies-upcoming
        case "load-latest":
          return { latest: action.payload.latest, movies: [...state.movies],upcoming:[...state.upcoming] };
      

      case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],//
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [],upcoming: [],latest: []  });//ca

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });//exercise4  movie-upcoming
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });//fix
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  //exercise3

  useEffect(() => {
    getLatestMovies().then((latest) => {
      dispatch({ type: "load-latest", payload: { latest } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  //ca
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        latest: state.latest,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,//exercise4
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;