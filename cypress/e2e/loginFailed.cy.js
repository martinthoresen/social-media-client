describe("loginFailed", () => {
  it("does not log in user with invalid credentials, and is shown a message", () => {
    cy.visit("/").wait(300);
    cy.get("#registerModal button").contains("Login").wait(300).click().wait(500);
    cy.get(`input#loginEmail[name="email"]`).type("cypresstest@noroff.no");
    cy.get(`input#loginPassword[name="password"]`).type("wrongpassword");

    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Either your username was not found or your password is incorrect`);
    });
  });
});
