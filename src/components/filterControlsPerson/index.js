import React from "react";
import "./filterControlsPerson.css";

const FilterControlsPerson = props => {
  const genres = [
    {id: 1, name: "All media type"},
    {id: 2, name: "Movie"},
    {id: 3, name: "TV"}
  ]

  return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="form-inline my-2 my-lg-0">
          <h4 className="form-inline my-2 my-lg-0">
            <span  className="navbar-brand">List Filtering:</span>
            <input
            className="form-control mr-sm-2"
              type="text"
              placeholder="Title Search"
            />
            <span className="navbar-brand">Genre:</span>
            <select className="form-control mr-sm-2" id="genre">
              {genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </h4>
        </div>
      </div>
  );
};
export default FilterControlsPerson;