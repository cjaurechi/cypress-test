describe('Transfer funds test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.login(username, password)
		})
	});

	it('Transfer funds from one account to another of the same customer', () => {
		cy.get('#transfer_funds_tab').click();
		cy.get('#tf_fromAccountId').select('3');
		cy.get('#tf_toAccountId').select('4');
		cy.get('#tf_amount').type('2000');
		cy.get('#tf_description').type('Paying my loan');
		cy.get('#btn_submit').click();
		cy.get('#tf_fromAccountId').should('have.value', 'Savings');
		cy.get('#tf_toAccountId').should('have.value', 'Loan');
		cy.get('#tf_amount').should('have.value', '2000');
		cy.get('#btn_submit').click();
		cy.get('.alert.alert-success').should('contain','successfully');
	});
})
