# Assignment 1 - ReactJS app.

Name: Qing Sheng

## Features.

 
 + Feature 1 - 5 new TMDB endpoints.
 + Feature 2 - 5 new views.
 + Feature 3 - Routing.
 + Feature 4 - Dynamic and interactive UI.
 + Feature 5 - Web form.
 + Feature 6 - Extensive data hyperlinking.
 + Feature 7 - Storybook support.
 + Feature 8 - Styled Components 3rd party components.



## API Data Model.


+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies
+ https://api.themoviedb.org/3/movie/${id}/similar - get a list of similar movies based on the current movie
+ https://api.themoviedb.org/3/person/popular - get a list of popular persons
+ https://api.themoviedb.org/3/person/${id} - get detailed information on a specific person
+ https://api.themoviedb.org/3/person/${id}/movie_credits - get a list of movies credits on a specific person


## App Design.

### Component catalogue (If required).


![][stories]

### UI Design.

![][movieDetail]
>Shows similar movies for a specific movie. Clicking the 'Show similar movies' button will display extracts of similar movies.

![][similarMovies]
>Shows detailed information on a similar movies.  Clicking the poster of similar movies will display selected similarmovies details.


![][rateForm]
>Shows rate form for movie. Select the rate number for the movie and type in username in text filed.

![][topRatedMovie]
>Shows list of top_rated movie card. Clicking 'rate the movie now' button will dispaly a movie page for rate.

![][popularPerson]
>Shows list of popular person card. Clicking 'view more detail' button on the person card will dispaly person details.

![][personDetail]
>Shows detailed information on a specific person. Click the poster of person's movie credits will display specific movieDetail.


## Routing.


+ /movies/top_rated (public) - displays the top rated movies card list.
+ /rating (protected) - displays the user's selected rating movies.
+ /person/popular (public) - displays the popular person card list.
+ /person/:id (public) - displays the detail information of the person.


### Data hyperlinking.


![][siteHeaderLink]
> Clicking the 'popular person' button on headsiter will display the popular person cards.Clicking the 'top rated' button on headsiter will display the top rated movie cards.

![][personcardLink]
> Clicking a person card causes the display of that person's details.Clicking the 'view more detail' button of popular person card will display the details informations of person.

![][moviePosterLink]
> Clicking the movie Poster on movie/person Details page will dispaly the detail information of the movie.

![][rateMovieLink]
>Clicking the 'rate the movie now' button of top_rated movies card will display the rate page of the movie

![][ratingLink]
>Click the number selector to rate the movie, Click the reset button to reset your select. 

![][similarMovieLink]
> Clicking the 'show similar movies' button on movieDetails page will dispaly the similar movies of the current movie.


## Independent learning (If relevant).

Styled Components 3rd party components.

Using the UI styled themes from https://bootswatch.com
using solar themes : https://bootswatch.com/solar/

reference: 1. bootswatch Quick Start help: https://bootswatch.com/help/
           2. Vedio from 'Install Bootswatch Theme Into Angular Application':https://www.youtube.com/watch?v=TIxkFinJsTY


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Qing Sheng

## App Features.


+ show Similar Movies - display similar movie list of the current movie in movieDetail page. The Show similar movies button reveals an excerpt for each similar movies of the movie.

Tests: cypress/integration/showSimilarMovies.spec.js 

![][similarMovies]

+ Top Rated Movie page - Shows top rated movies cards in one page. The 'rate the movie now' button skip to rate movie page for user

Tests: cypress/integration/toprated-page.spec.js 

![][topRatedMovie]

+ Rating page - Shows rating form of movies,Click the number selector to rate the movie, Click the reset button to reset your select. 

Tests: cypress/integration/rating-page.spec.js 

![][rateForm]



+ Popular Person page - Shows popular person cards in one page. The 'view more detail' button skip to person detail page. Click person profile photo on card also can skip to person detail page.

Tests: cypress/integration/popularPerson-page.spec.js 

![][popularPerson]
+ Person Details page - Shows the details about a person and some person's movie credits. Click the poster of person's movie credits can skip to the movie details page.

Tests: cypress/integration/personDetail-page.spec.js 

![][personDetail]



## Testing.

Cypress Dashboard URL: 
https://dashboard.cypress.io/organizations/7b3d3660-2e93-4e68-8b28-c9500e884145/projects

### Advanced Testing.


+ cypress/integration/toprated-page.spec.js - test the toprated page when with the hyperlinking of movie poster
+ cypress/integration/showSimilarMovies.spec.js - test when a movie has similar movie and the the hyperlinking of movie poster
+ cypress/integration/personDetail-page.spec.js - test person detail page when click person photo and button.
+ cypress/integration/popularPerson-page.spec.js - test person card information when click siteheader.
+ cypress/integration/rating-page.spec.js - test the rate form for a specific movie.



---------------------------------

[stories]: ./public/story.png
[movieDetail]: ./public/movieDetail.png
[similarMovies]:./public/similarMovies.png

[topRatedMovie]:./public/topRatedMovie.png

[rateForm]:./public/rateForm.png
[popularPerson]:./public/popularPerson.png
[personDetail]:./public/personDetail.png

[siteHeaderLink]:./public/siteheaderLink.png
[personcardLink]:./public/personcardLink.png
[moviePosterLink]:./public/moviePosterLink.png
[ratingLink]:./public/ratingLink.png
[rateMovieLink]:./public/rateMovieLink.png
[similarMovieLink]:./public/similarMovieLink.png




