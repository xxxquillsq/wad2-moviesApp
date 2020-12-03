import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';

const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  const latest = context.latest.filter((m) => {  // New
    return !("favorite" in m);
  });


  return (
    <PageTemplate
      title="Latest Movies"
      movies={latest}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default LatestMoviesPage;