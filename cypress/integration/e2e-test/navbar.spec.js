/// <reference types="Cypress" />

describe('Navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Verify navbar Online Banking option', () => {
        cy.get('#onlineBankingMenu').click();
        cy.url().should('include', 'online-banking');
        cy.get('h1').should('contain.text', 'Online Banking');
    });

    it('Verify navbar Feedback option', () => {
        cy.get('#feedback').click();
        cy.url().should('include', 'feedback');
    });

    it('Verify navbar Feedback option', () => {
        cy.get('.brand').click();
        cy.url().should('include', 'index');
    });
});