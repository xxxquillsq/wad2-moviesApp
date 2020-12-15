import React from "react";
import PageTemplate from "../components/templateMoviePage";
import RateForm from '../components/rateForm'
const RateMoviePage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
         <RateForm review={props.location.state.movie} /> 
      </PageTemplate>
  );
};
export default RateMoviePage;