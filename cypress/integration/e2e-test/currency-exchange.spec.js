/// <reference types="Cypress" />

describe('Currency exchange test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
    });

    it('Calculate cost of JPY to USD', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Purchase Foreign Currency').click();
        cy.get('#pc_currency').select('Japan (yen)');
        cy.get('#pc_amount').type('2800');
        cy.get('#pc_inDollars_true').click();
        cy.get('#pc_calculate_costs').click();
        cy.get('#pc_conversion_amount').should('contain', 'yen (JPY) =');
    });
});