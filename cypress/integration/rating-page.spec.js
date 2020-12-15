let movies;    // List of movies from TMDB
const id = 724089; //topratedListMovie[1]

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("toprated Page", () => {
    before(() => {
     // Get movies from TMDB and store in movies variable.
    cy.request(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
      "TMDB_KEY"
     )}&language=en-US&page=1`
    )
     .its("body")    // Take the body of HTTP response from TMDB
     .then((response) => {
      movies = response.results
     });
     cy.request(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        movies = response.results;
      });
    });

    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get(".card").eq(2).find("a").contains("Rate the movie now!").click();
    });
  
    describe("Base test", () => {
      it("should displays rating page ", () => {
        cy.get("h3").contains("Add your rate for this movie");
      });
    });



   
});
