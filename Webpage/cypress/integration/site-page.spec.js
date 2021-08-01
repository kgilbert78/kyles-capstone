describe("changeImage", () => {
    it("should change the featured image when a thumbnail is clicked", () => {
        cy.visit("site-page.html");
        cy.get("#thumbnailImage2").click({force: true});
        // cy.get('main').children().eq(0).eq(0).children().get('div[id="thumbnailRow"]').get('img[id="thumbnailImage2"]').click();
    });
});

describe("nav bar link test", () => {
    it("should display the homepage when the logo is clicked", () => {
        cy.visit("site-page.html");
        cy.get("a").contains("Logo").click();
    });
});