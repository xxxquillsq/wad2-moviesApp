import React from "react";
import "./personCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PersonCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <img
          className="card-img-tag center "
          alt={props.person.title}
          src={
            props.person.profile_path
              ? `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}/${props.person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.person.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.person.media_type}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span>popularity: {props.person.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary">
            view more detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard ;