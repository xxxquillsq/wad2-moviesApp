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
    <table className="center table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Overview</th>
          <th scope="col">Movie</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(m => {
            return (
              <tr key={m.id}>
                <td>{m.title}</td>
                <td >{excerpt(m.overview)}</td>
                <td className="btn btn-outline-secondary">
                <Link to={`/movies/${m.id}`}>
                  <img src={
                  m.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${m.poster_path}`
                    : "./film-poster-placeholder.png"
                } height="160" width="110" className="poster"
                alt={m.title}></img>
                     </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};