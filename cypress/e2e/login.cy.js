describe('Connexion avec fixture', () => {
  it('connecte un utilisateur avec des identifiants valides', () => {
    cy.fixture('user').then((userData) => {
      cy.login(userData.email, userData.password)
      cy.get('.post-title').should('contain', 'Logged In Successfully')
    })
  })

  it('refuse la connexion avec un mauvais mot de passe', () => {
    cy.login('utilisateur@test.com', 'MauvaisMotDePasse')
    cy.get('#error').should('be.visible')
  })
  
})
  