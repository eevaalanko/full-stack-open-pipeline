describe('Phonebook', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('Phone book')
  })
})