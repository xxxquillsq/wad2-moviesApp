import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';
import RateTheMovieNowButton from '../components/buttons/rateTheMovieNow';

const TopratedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const toprated = context.toprated;
  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={toprated}
      action={movie => <RateTheMovieNowButton movie={movie} />}
    />
  );
};

export default TopratedMoviesPage;