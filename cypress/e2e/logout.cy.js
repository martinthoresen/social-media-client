describe("logout", () => {
  it("can log out successfully", () => {
    cy.visit("/").wait(300);
    cy.get("#registerModal button").contains("Login").wait(300).click().wait(500);
    cy.get(`input#loginEmail[name="email"]`).type("cypresstest@noroff.no");
    cy.get(`input#loginPassword[name="password"]`).type("cypresstest");
    cy.get(`button[type="submit"]`).contains("Login").click().wait(1000);
    cy.get("button").contains("Logout").click();
  });
});
