/// <reference types="cypress" />

describe('Sauce Demo Tests', () => {
    beforeEach(() => {
      cy.request('GET', 'https://www.saucedemo.com/')
        .then((response) => {
          expect(response.status).to.eq(200);
        });
  
      cy.visit('https://www.saucedemo.com/', { failOnStatusCode: false });
    });
  
    it('should load the login page', () => {
      cy.get('input#user-name').should('be.visible');
      cy.get('input#password').should('be.visible');
      cy.get('input#login-button').should('be.visible');
    });  

    
    // it('should load the login page', () => {
    //   // Memastikan elemen-elemen di halaman login ada
    //   cy.get('input#user-name').should('be.visible');
    //   cy.get('input#password').should('be.visible');
    //   cy.get('input#login-button').should('be.visible');
    // });
  
    // it('should login with valid credentials', () => {
    //   // Mengisi formulir login dan mengklik tombol login
    //   cy.get('input#user-name').type('standard_user');
    //   cy.get('input#password').type('secret_sauce');
    //   cy.get('input#login-button').click();
  
    //   // Memastikan diarahkan ke halaman utama setelah login
    //   cy.url().should('include', '/inventory.html');
    //   cy.get('.title').should('contain', 'Products');
    // });
  
    // it('should show an error message with invalid credentials', () => {
    //   // Mengisi formulir login dengan kredensial yang tidak valid
    //   cy.get('input#user-name').type('invalid_user');
    //   cy.get('input#password').type('invalid_password');
    //   cy.get('input#login-button').click();
  
    //   // Memastikan pesan kesalahan muncul
    //   cy.get('.error-message-container').should('be.visible');
    //   cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    // });
  
    // it('should log out successfully', () => {
    //   // Login terlebih dahulu
    //   cy.get('input#user-name').type('standard_user');
    //   cy.get('input#password').type('secret_sauce');
    //   cy.get('input#login-button').click();
  
    //   // Klik menu burger dan log out
    //   cy.get('.bm-burger-button').click();
    //   cy.get('#logout_sidebar_link').click();
  
    //   // Memastikan kembali ke halaman login
    //   cy.url().should('include', '/');
    //   cy.get('input#user-name').should('be.visible');
    // });
  
  
  


    // it('Should try to login failed',() =>{
    //     cy.visit('https://www.saucedemo.com/', {timeout:10000})
    //     cy.fixture("swaglab").then(user =>{
    //         const username = user.username1
    //         const password = user.password1

    //         cy.get('#user_login').clear()
    //         cy.get('#user_login').type(username)

    //         cy.get('input[name="user_password"]').clear()
    //         cy.get('input[name="user_password"]').type(password)

    //         cy.get('input[name="submit"]').click()

    //         cy.get('.alert-error').should('contains.text','Login and/or password are wrong.')
    //     })
    // })

    // it('Should try to login',() =>{
    //     cy.visit('https://www.saucedemo.com/', {timeout:10000})
    //     cy.fixture("user").then(user =>{
    //         const username = user.username
    //         const password = user.password

    //         cy.get('#user_login').clear()
    //         cy.get('#user_login').type(username)

    //         cy.get('input[name="user_password"]').clear()
    //         cy.get('input[name="user_password"]').type(password)

    //         cy.get('input[name="submit"]').click()
    //     })
    // })

    })