import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Name (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {person.name}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Person popularity
        </li>
        <li key="rdv" className="list-group-item ">
          {person.popularity}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {person.place_of_birth}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Known for
        </li>
        {person.birthday}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {person.biography}
      </ul>
    </>
  );
};