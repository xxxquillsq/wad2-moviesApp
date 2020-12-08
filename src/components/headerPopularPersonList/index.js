import React from "react";

const Header = ({ numPersons }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          No. {" "}
          <span className="badge badge-pill badge-success">{numPersons}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
