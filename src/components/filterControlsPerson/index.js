import React from "react";
import "./filterControlsPerson.css";

const FilterControlsPerson = props => {
  const genres = [
    {id: 1, name: "All media type"},
    {id: 2, name: "Movie"},
    {id: 3, name: "TV"}
  ]

  return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>List Filtering:</span>
            <input
              type="text"
              placeholder="Title Search"
            />
            <span>Genre:</span>
            <select id="genre">
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