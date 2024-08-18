Cypress.Commands.add('login', (username,password)=>{

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('paybills', (Payee,Account,Amound,Date,Descriptions)=>{

    cy.get('a[href="/bank/redirect.html?url=pay-bills.html"]').click();
            cy.get('#sp_payee').select(Payee);
            cy.get('#sp_account').select(Account);
            cy.get('#sp_amount').type(Amound);
            cy.get('#sp_date').click(); 
            cy.get('.ui-datepicker-calendar') 
            .contains('15') 
            .click();
            cy.get('#sp_date').should('have.value', Date);
            cy.get('#sp_description').type(Descriptions)
            cy.get('#pay_saved_payees').click()
        })