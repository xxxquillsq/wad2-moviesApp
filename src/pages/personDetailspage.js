import React, {useState, useEffect}  from "react";
import PersonHeader from "../components/headerPerson";
import PersonDetails from "../components/personDetails";
import "./personPage.css";
import PersonMovieCredits from "../components/personMovieCredits"


  const PersonPage = props => {
    const { id } = props.match.params
    const [person, setPerson] = useState(null)
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then(res => res.json())    
      .then(person => {
        setPerson(person);
      })
    }, [id])
    
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
            <div className="col-9">
             <h3>Movie Credits</h3>
            </div>
          <div className="col-9">
              <PersonMovieCredits person={person} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PersonPage;