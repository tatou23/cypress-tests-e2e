describe('Accueil - Cypress Demo', () => {
    it('doit afficher le titre et accéder à un exemple', () => {
      // Visiter la page de démonstration
      cy.visit('https://example.cypress.io')
  
      // Vérifie que le titre est bien présent
      cy.contains('Kitchen Sink')
  
      // Clique sur un lien vers une section (par ex. "Querying")
      cy.contains('Querying').click({ force: true })
  
      // Vérifie que le titre de la page changée est correct
      cy.url().should('include', '/commands/querying')
      cy.get('h1').should('contain', 'Querying')
    })
  })
  