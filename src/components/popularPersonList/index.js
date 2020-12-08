import React from "react";
import Person from "../personCard/";
import "./popularPersonList.css";

const PopularPersonList = props => {
  const personCards = props.persons.map(p => (
    <Person key={p.id} person={p} />
  ));
  return <div className="row movies bg-info">{personCards}</div>;
};

export default PopularPersonList;