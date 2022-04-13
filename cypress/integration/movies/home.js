/* eslint-disable @typescript-eslint/no-unused-vars */
/* global
  cy
  beforeEach
  jest
  describe
  it
  expect
*/

describe('Home Page', () => {
  beforeEach(() => {
    localStorage.setItem('token', 'super');
    cy.visit('http://localhost:3000/app/movies');
  });

  it('Home render', () => {
    cy.get('h1').should('have.length', 2);
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('.MovieCard').should('have.length', 40);
  });

  it('Navigation', () => {
    cy.get('img[alt="Icon favorites"]').click();
    cy.url().should('eq', 'http://localhost:3000/app/movies/favorites');
    cy.get('img[alt="Icon home"]').click();
    cy.url().should('eq', 'http://localhost:3000/app/movies');
  });
});
