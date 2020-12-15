import React from "react";
import { Link } from "react-router-dom";
import "bootswatch/dist/solar/bootstrap.min.css";
import "./personCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PersonCard = props => {
  return (
    <div className="col-sm-3" >
      <div className="card card  bg-light" >
      <Link to={`/person/${props.person.id}`}>
      <img
          className="card-img-tag center "
          alt={props.person.title}
          src={
            props.person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{props.person.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span className="card-text"> {props.person.known_for_department}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span className="card-text">popularity: {props.person.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
        <Link to={`/person/${props.person.id}`}>
          <button type="button" className="btn w-100 btn-primary">
            view more detail
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard ;