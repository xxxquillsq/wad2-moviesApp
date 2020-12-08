import React from "react";
import { Link } from "react-router-dom";
import "./peopleCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PeopleCard = ({people, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/person/${people.id}`}>
        <img
          className="card-img-tag center "
          alt={person.title}
          src={
            person.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{person.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {person.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {person.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(person)}
        </div>
      </div>
    </div>
  );
};