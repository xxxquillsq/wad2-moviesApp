import React from "react";
import "./personDetails.css";
import "../../globals/fontawesome";


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
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          birthday
        </li>
        <li key="rut" className="list-group-item ">
          {props.person.birthday}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          place of birth
        </li>
        <li key="rdv" className="list-group-item ">
          {props.person.place_of_birth}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          biography
        </li>
        </ul>
      
        <li key="rdv" className="list-group-item ">
          {props.person.biography}
        </li>
     
    </>

  );
};

export default PersonDetails ;