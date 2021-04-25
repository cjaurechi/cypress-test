/// <reference types="Cypress" />

describe('Password test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });
    it('Recover forgotten password', () => {
        cy.get('#signin_button').click();
        cy.contains('Forgot your password').click();
        cy.get('#user_email').clear().type('test@email.com');
        cy.contains('Send Password').click();
        cy.get('.offset3').should('contain.text', 'test@email.com')
    });
});