/* eslint-disable @typescript-eslint/no-unused-vars */
/* global
  cy
  beforeEach
  jest
  describe
  it
  expect
*/

describe('Login Page', () => {
  const email = 'pruebas@gmail.com';
  const password = 'pruebas123';
  const emailInvalid = 'ionic@yopmail.com';
  const passwordInvalid = 'password';

  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Login failed', () => {
    cy.get('input[type="email"]').type(emailInvalid);
    cy.get('input[type="password"]').type(passwordInvalid);
    cy.contains('Signin').click();
    cy.contains('Loading...');
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('Login valid', () => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('Signin').click();
    cy.contains('Loading...');
    cy.url().should('eq', 'http://localhost:3000/app/movies');
  });
});
