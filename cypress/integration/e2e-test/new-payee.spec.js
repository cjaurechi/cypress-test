/// <reference types="Cypress" />

describe('New payee test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
    });

    it('Add new payee to the list', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Add New Payee').click();
        const payee_name = 'Brad Pitt'
        cy.get('#np_new_payee_name').clear().type(payee_name);
        cy.get('#np_new_payee_address').clear().type('Fake St. 123');
        cy.get('#np_new_payee_account').clear().type('1234567890');
        cy.get('#np_new_payee_details').clear().type('Random details');
        cy.get('#add_new_payee').click();
        cy.get('#alert_content').should('contain', `The new payee ${payee_name} was successfully created`);
    });
});