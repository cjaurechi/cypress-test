/// <reference types="Cypress" />

describe('Searchbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Search specific term on Home Page searchbox', () => {
        cy.get('#searchTerm').clear().type('Some text{enter}');
        cy.get('h2').contains('Search Results');
    });
});