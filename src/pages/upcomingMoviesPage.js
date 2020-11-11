import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);// if by "upcoming" movies in upcomingPage will not reduce
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;