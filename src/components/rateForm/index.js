import React, {useContext } from "react";
import "./rateForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";

const RateForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your rate for this movie</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue="please type your name"
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="please set between 0.5~10.0"
          defaultValue="please set between 0.5~10.0"
          name="rating number"
          min="0.5" max="10"
          ref={register({
            required: "Rating number",
            minLength: { value: 0.5, message: "rate number is too low" }
          })}
        />
      </div>
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your rate"
          defaultValue={"rating reason - optional"}
          name="content"
          ref={register({
            required: "No reason text",
            minLength: { value: 1, message: "reason text is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(RateForm);
