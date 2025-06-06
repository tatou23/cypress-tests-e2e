describe('Page d’accueil', () => {
  it('affiche le titre', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('Kitchen Sink')
    })
  })
  