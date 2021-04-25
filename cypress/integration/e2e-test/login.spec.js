/// <reference types="Cypress" />

describe('Login / logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
    });

    it('Attempt to login with invalid credentials', () => {
        cy.login('invalid username', 'invalid password');
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong');
    });

    it('Login with valid credentials', () => {
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
            cy.get(`a[class*="dropdown-toggle"]:contains(${username})`).should('be.visible');
        })
    });

    it('Logout after successful login', () => {
        cy.fixture('user').then(user => {
            cy.contains(user.id).click();
        })
        cy.get('#logout_link').click();
        cy.get('#signin_button').should('be.visible');
    });
});