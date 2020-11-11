import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchListButton = e => {
    e.preventDefault();
    context.addToWatchListButton(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchListButton}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton;