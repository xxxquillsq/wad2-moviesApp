let persons;    // List of movies from TMDB

describe("PopularPerson Page", () => {
    before(() => {
     // Get popular persons from TMDB and store in persons variable.
    cy.request(
    `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
      "TMDB_KEY"
     )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
     .its("body")    // Take the body of HTTP response from TMDB
     .then((response) => {
      persons = response.results
     })
    })

    beforeEach(() => {
      cy.visit("/person/popular");
    });
  
    describe("Base test", () => {
      it("displays popular person page header", () => {
        cy.get("h2").contains("No. ");
        cy.get(".badge").contains(20);
      });
    });

    describe("display popular person card", () => {
      describe("diapaly person card contect" ,() => {
        it("should display person name", () => {
          cy.get(".card").find("span").contains("Acting");
        
        })
        it("should display person profile img", () => {
          cy.get(".card").find("h4").contains(persons[1].name);
         
        })

        it("should dispaly a button for view more", () => {
            cy.get(".card").eq(1).find("button").contains("view more detail");
        })
      });

      describe("img click or button click and let borswer change", () => {
        it("should display person detail and chnage URL ", () => {
            cy.get(".card").eq(1).find("img").click();
            cy.url().should("include", `/person/${persons[1].id}`);
            cy.get("h4").contains("Overview"); 
        });
      });

    });

})