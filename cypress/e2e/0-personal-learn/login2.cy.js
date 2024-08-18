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

    it('Should try to login',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()
        })
    })

    it('Should try to login failed',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.fixture("user").then(user =>{
            const username = user.username1
            const password = user.password1

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contains.text','Login and/or password are wrong.')
        })
    })
    })