/// <reference types="cypress" />

describe('clicking "Type" shows the right headings', () => {
    it('',() =>{
        cy.visit('https://example.cypress.io')
        // cy.pause()
        cy.contains('type').click()

        cy.url().should('include','/commands/actions')
        cy.get('.action-email')
        .type('hello@cypress.io')
        .should('have.value','hello@cypress.io')

        // cy.get('.action-focus')
    })
    })