context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('clicking on the Charity List link redirects to the charities page', () => {
    cy.contains('View our charity partners').click()
    cy.location('pathname').should('include', 'Charities')
  })

  it('clicking on a specific charity wishlist redirects to the wishlist page', () => {
    cy.contains('View our charity partners').click()
    cy.contains('Our Wishlist').click()
    cy.location('pathname').should('include', 'wishlist')
  })

  it('clicking About Us redirects to the about page', () => {
    cy.contains('About').click()
    cy.location('pathname').should('include', 'About')
  })

  it('user can redirect to the Home page from the About page', () => {
    cy.contains('About').click()
    cy.contains('Home').click()
    cy.location('pathname').should('include', '')
  })

  it('reloads the page', () => {
    cy.reload()
  })
})
