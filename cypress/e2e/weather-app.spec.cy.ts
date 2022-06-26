context('', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Basic interaction with the application', () => {
    it('Application show all 12 weather cards', () => {
      cy.visit('http://localhost:3000');
      cy.get('main').find('article').should('have.length', 12);
    });

    it('Type Barcelona, shows main correct information', () => {
      cy.get('input').type('Barcelona');
      cy.contains('h2', 'Barcelona, ES');
    });

    it('Type an invalid city, shows the not found error', () => {
      cy.get('input').type('Cancun');
      cy.contains('p', 'City not found!');
    });
  });
});
