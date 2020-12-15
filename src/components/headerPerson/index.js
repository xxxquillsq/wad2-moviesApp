import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

const PersonHeader = ({ person,history }) => {
  return (
    <div className="row">
      <div className="col-2">
          <button className="btn btn-outline-secondary" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
          </button>
        </div>
      <div className="col-6 offset-3">
        <h2>
          {person.name}
          {"  "}
          <a className = "success" href={person.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default withRouter( PersonHeader );