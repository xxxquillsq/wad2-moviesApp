import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";// CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import WatchListMoviesPage from './pages/watchListMoviesPage';    // exercise4
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage'; 
import TopratedMoviesPage from './pages/topratedMoviesPage';   // ca  
import RateMoviePage from './pages/rateMoviePage';//ca
import PopularPersonPage from "./pages/popularPersonPage";//ca
import PersonPage from "./pages/personDetailspage"//ca
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const App = () => {
  return (
    <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>    
          <GenresContextProvider>    {/* NEW */}
            <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/rating" component={RateMoviePage} />
            <Route path="/person/popular" component={PopularPersonPage} />
            <Route path="/person/:id" component={PersonPage}/>
          <Route path="/movies/upcoming" component={UpcomingMoviesPage} /> 
          <Route path="/movies/top_rated" component={TopratedMoviesPage} /> 
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
        
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>   
        
      </div>
    </div>
  </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));