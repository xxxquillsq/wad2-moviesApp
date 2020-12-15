import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import SimilarMovies from "../components/similarMovies";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW

  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="center"> 
          <p>
            click button view more information
          </p>
        </div>
       
        <div className="center"> 
        <button type="button" class="btn btn-primary btn-lg btn-block">
        {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </button>

          <div className="center"> 
          <p>
            
          </p>
          </div>
        
          <button type="button" class="btn btn-primary btn-lg btn-block">
          <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Show Similar Movies
              </Link>
              </button>
         
        </div>

        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <Route
          path={`/movies/:id/similar`}
          render={props => <SimilarMovies movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
}

export default withRouter(MoviePage);