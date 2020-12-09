import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPersonMovie_credits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ person }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getPersonMovie_credits(person.id).then(credits => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table table-striped table-bordered table-hover">
      
      <thead>
        <tr>
          <th scope="col">Movie Title</th>
          <th scope="col">character</th>
          <th scope="col">Overview</th>
          <th scope="col">release date</th>
          <th scope="col">Movie Poster</th>
        </tr>
      </thead>
      <tbody>
      {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{r.character}</td>
                <td>{excerpt(r.overview)}</td>
                <td>{r.release_date}</td>
                <td><img src={
                  r.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
                    : "./film-poster-placeholder.png"
                } height="160" width="110" className="poster"
                alt={r.title}></img></td>
            </tr>
            );
          })}
      </tbody>
    </table>
  );
};