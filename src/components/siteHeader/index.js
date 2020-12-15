import React from "react";
import { Link } from "react-router-dom";
import "bootswatch/dist/solar/bootstrap.min.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/person/popular">
              Popular person
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/top_rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/watchlist">
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;
