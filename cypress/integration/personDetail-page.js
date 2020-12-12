let personId = null
let person;

describe("Person Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryPersonIdignored) => {
        personId = arbitraryPersonIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((personDetails) => {
        person = personDetails;
        return personDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(1).find("a").click();
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display person name in the page header", () => {
    cy.get("h2").contains(person.name);
  });

  it("should display the person's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("name");
        cy.get("li").eq(1).contains(person.name);
        cy.get("li").eq(2).contains("popularity");
        cy.get("li").eq(3).contains(person.popularity); 
      });
  });

  it("should display the person movie credit information", () => {
    cy.get("h3").contains("Movie Credits")
    cy.get("table").find("th").contains("Movie Title");
  });

  it("should display the person img with appropriate src attribute", () => {
    cy.get(".person")
      .should("have.attr","src")
      .should("include", person.profile_path);
  });
});