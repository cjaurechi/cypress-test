/// <reference types="Cypress" />

describe('Login / logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
    });

    it('Attempt to login with invalid credentials', () => {
        cy.get('#login_form').should('be.visible');
        cy.get('#user_login').type('invalid username');
        cy.get('#user_password').type('invalid password');
        cy.get('.btn').contains('Sign in').click();
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong');
    });

    it('Login with valid credentials', () => {
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.get('#user_login').type(username);
            cy.get('#user_password').type(password);
            cy.get('#user_remember_me').check();
            cy.contains('Sign in').click();
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