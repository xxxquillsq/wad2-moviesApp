let movieId = 7240890
let movie;

describe("Show Similar Movies", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/movies/top_rated`);
    cy.get(".card").eq(1).find("img").click();
  });


  describe("show similar movies button", () => {
    describe("base test" ,() => {
      it("should display show similar movies button", () => {
        cy.get("div").eq(2).find("a").eq(2).contains("Show Similar Movies"); 
        });
      })

    describe("click similar movies button " ,() => {
        it("should display similar movies below", () => {
          cy.get("div").eq(2).find("a").eq(2).click(); 
          cy.get("table")
                 .eq(0)
                 .within(() => {
            cy.get("th").eq(0).contains("Title");
            cy.get("th").eq(1).contains("Overview");
            cy.get("th").eq(2).contains("Movie");
          });
        });
      });
    });

    describe("similar movies table", () => {
      describe("base test dispaly table include movie credits" ,() => {
        it("should display table ", () => {
          cy.get("div").eq(2).find("a").eq(2).click(); 
          cy.get("table").find("thead").contains("Title"); 
          });

        it("should display person's movie credits ", () => {
          cy.get("div").eq(2).find("a").eq(2).click(); 
          cy.get("table")
                 .eq(0)
                 .within(() => {
            cy.get("th").eq(0).contains("Title");
            cy.get("th").eq(1).contains("Overview");
            cy.get("th").eq(2).contains("Movie");
          });
          });

          it("should display movie poster ", () => {
            cy.get("div").eq(2).find("a").eq(2).click(); 
            cy.get("table"); 
           
            });

      });

      describe("similar movie poster" ,() => {
        it("should change URL and come to movie detail Page by click ", () => {
          cy.get("div").eq(2).find("a").eq(2).click(); 
          cy.get("table").find("a").eq(0).click(); 
          cy.url().should("include", `/movies/281957`);
          });

      });

    });
});