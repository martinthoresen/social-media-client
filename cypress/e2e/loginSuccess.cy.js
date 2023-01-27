describe("loginSuccess", () => {
  it("can log in with the login form with valid credentials", () => {
    cy.visit("/").wait(300);
    cy.get("#registerModal button").contains("Login").wait(300).click().wait(500);
    cy.get(`input#loginEmail[name="email"]`).type("cypresstest@noroff.no");
    cy.get(`input#loginPassword[name="password"]`).type("cypresstest");
    cy.get(`button[type="submit"]`).contains("Login").click();
  });
});
