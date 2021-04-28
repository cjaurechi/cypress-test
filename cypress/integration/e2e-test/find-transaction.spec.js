/// <reference types="Cypress" />

describe('Find transaction test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
    });

    it('Filter transactions per amount', () => {
        cy.get('#account_activity_tab').click();
        cy.contains('Find Transactions').click();
        cy.get('#aa_fromAmount').type('100');
        cy.get('#aa_toAmount').type('1000');
        cy.get('button[type="submit"]').click();
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0);
    });
});