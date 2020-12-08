import React from "react";
import PersonHeader from "../components/headerPerson";
import PersonDetails from "../components/personDetails";
import "./moviePage.css";

const PersonDetailPage = ({ person }) => {
  return (
    <>
      {person ? (
        <>
          <PersonHeader person={person} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                className="person"
                alt={person.title}
              />
            </div>
            <div className="col-9">
              <PersonDetails person={person} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PersonDetailPage;