/// <reference types="cypress" />

describe('Browser actions', () => {
    it('sould check correct url',() =>{
        cy.visit('https://example.cypress.io', {timeout:10000})

        it('sould check correct url', ()=>{
            cy.url().should('include', 'example.com')
        })
    
    it('sould check for correct element on the page', ()=>{
        cy.get('h1').should('be.visible');
    })
    });

    

    })