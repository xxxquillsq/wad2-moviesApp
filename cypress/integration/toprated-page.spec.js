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
      cy.visit("/movies/top_rated");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Top Rated Movies");
        cy.get(".badge").contains(20);
      });
    });

    describe("Rating Movies button test",() => {
        it("dispalys Rating movies button",()=>{
            cy.get(".card").eq(1).find("a").contains("Rate the movie now!");
        })
      });

      describe("Navigation test",() => {
        it("should turn to toprated movie detail page and change browser URL",()=>{
          cy.get(".card").eq(1).find("img").click();
          cy.url().should("include", `/movies/${id}`);
          cy.get("h4").contains("Overview"); 
        })
    });

   
});
