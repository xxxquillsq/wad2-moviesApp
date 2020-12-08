import React, {useState, useEffect } from "react";
import Header from "../components/headerPopularPersonList";
import PopularPersonList from "../components/popularPersonList";
import FilterControlsPerson from "../components/filterControlsPerson";

const PopularPersonListPage = () => {

  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(persons => {
        setPersons(persons);
      });
  }, []);

  return (
    <>
      <Header numPersons={persons.length} />
      <FilterControlsPerson />
      <PopularPersonList persons={persons} />
    </>
  );
};

export default PopularPersonListPage;