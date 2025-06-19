Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#submit').click()
    })