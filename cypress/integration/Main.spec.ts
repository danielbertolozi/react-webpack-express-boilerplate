function setupMockups(sampleResponse: string) {
  cy.intercept("/api/v1/sample", { content: sampleResponse })
}

describe("Integration scenarios for application", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
  });
  describe("Application happy path", () => {
    it("should open application locally", () => {
      cy.get("#root").should("be.visible");
    });
    it("clicking the button should open a dialog", () => {
      setupMockups("Cypress mock");
      const stub = cy.stub();
      cy.on("window:alert", stub);
      cy.get("#testButton").click().then(() => {
        expect(stub).to.be.calledWith("Cypress mock");
      });
    });
  });
});
