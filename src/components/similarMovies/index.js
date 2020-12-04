import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(m => {
            return (
              <tr key={m.id}>
                <td>{m.title}</td>
                <td>{excerpt(m.overview)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/${m.id}`,
                      state: {
                        movies: m,
                        movie: movie
                      }
                    }}
                  >
                    Movie detail
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};