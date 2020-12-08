import React from "react";
import "./personDetails.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonDetails = props => {
  return (
    <>
<h4>Overview</h4>
      <p>{props.person.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          name
        </li>
        <li key="rut" className="list-group-item ">
          {props.person.name}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          popularity
        </li>
        <li key="rdv" className="list-group-item ">
          {props.person.popularity}
        </li>
      </ul>
    </>

  );
};

export default PersonDetails ;