import React, { useContext } from "react";
import "bootswatch/dist/solar/bootstrap.min.css";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-md-12">
        
        <h4 className="form-inline my-2 my-lg-0">
          <span className="navbar-brand">List Filtering:</span>
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span  className="navbar-brand">Genre:</span>

          <select className="form-control mr-sm-2" id="genre" onChange={handleGenreChange} >
            {context.genres.map(genre => {
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

export default FilterControls;