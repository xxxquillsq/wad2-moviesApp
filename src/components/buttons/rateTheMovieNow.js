import React from "react";
import { Link } from "react-router-dom";

const RateTheMovieNowButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/rating`,
        state: {
          movie: movie
        }
      }}
    >
      Rate the movie now!
    </Link>
  );
};

export default RateTheMovieNowButton ;