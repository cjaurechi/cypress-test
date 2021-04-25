/// <reference types="Cypress" />

describe('Feedback form test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#feedback').click();
    });

    it('Complete and submit feedback', () => {
        cy.get('form').should('be.visible');
        cy.get('#name').clear().type('Brad');
        cy.get('#email').clear().type('Pitt');
        cy.get('#subject').clear().type('Testing feedback form');
        cy.get('#comment').clear().type('Testing feedback form comment section', { delay: 100 });
        cy.get('.btn-signin').click();
        cy.url().should('include', 'sendFeedback');
        cy.get('#feedback-title').should('have.text', 'Feedback');
    })
});