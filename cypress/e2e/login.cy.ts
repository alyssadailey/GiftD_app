describe('Login Flow', () => {
  it('logs in with valid credentials', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Email"]').type('test3@test.com');
    cy.get('input[placeholder="Password"]').type('Test123');
    cy.contains('Login').click();

    cy.url().should('eq', 'http://localhost:5173/');
    cy.contains('Welcome back,').should('exist');
  });
});