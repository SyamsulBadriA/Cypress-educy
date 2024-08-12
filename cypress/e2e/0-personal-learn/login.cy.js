/// <reference types="cypress" />

describe('Working with input', () => {
    it('Visit the website',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.url().should('include', 'login.html')
    });

    it('Should fill username',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    
    it('Should fill password',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
    
    it('Must fill in the check box',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('#user_remember_me').uncheck()
        cy.get('#user_remember_me').click()
    });
    })