/// <reference types="Cypress" />

describe('Payment test', () => {
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
        cy.contains('Pay Saved Payee').click();
        cy.get('#sp_payee').select('wellsfargo');
        cy.get('#sp_account').select('Credit Card');
        cy.get('#sp_amount').type('2000');
        cy.get('#sp_date').type('2021-04-24 {enter}');
        cy.get('#sp_description').type('Random description');
        cy.get('#pay_saved_payees').click();
        cy.get('#alert_content').should('contain','The payment was successfully submitted');
    });
});