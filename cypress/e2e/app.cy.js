describe("App", () => {
    beforeEach(() => {
        cy.visit(" http://localhost:5173/");
    });
    it("Should display the title", () => {
        cy.get("h1").contains("Vite + React");
    })
    /*it("Should disply the text", () => {
        cy.get(".read-the-docs").contains("Click on the Vite and React logos to learn more");
    })*/
})