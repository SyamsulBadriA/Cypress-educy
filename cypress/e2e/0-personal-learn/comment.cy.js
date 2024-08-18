/// <reference types="cypress" />

describe('Working with input', () => {
    it('Should try to login',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.login(username,password)

        cy.fixture("paymant").then(pay =>{

            const Payee = pay.Payee
            const Account = pay.Account
            const Amound = pay.Amound
            const Date = pay.Date
            const Descriptions = pay.Descriptions

            cy.paybills(Payee,Account,Amound,Date,Descriptions)

        })
        })
    })
})