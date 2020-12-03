import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';

const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  const latest = context.latest.filter((m) => {  // New
    return !("watchlist" in m);// if by "upcoming" movies in upcomingPage will not reduce
  });

  return (
    <PageTemplate
      title="Latest Movies"
      movies={latest}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default LatestMoviesPage;