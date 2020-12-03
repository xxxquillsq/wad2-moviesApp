let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page", () => {
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
     })
    })

    beforeEach(() => {
      cy.visit("/movies/top_rated");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Top Rated Movies");
        cy.get(".badge").contains(20);
      });
    });

    describe("Rating Movies button test",() => {
        it("dispalys a button named Rating movies",()=>{
            cy.get(".card").eq(1).find("button").contains("rate the movie now");
        })
    });
})