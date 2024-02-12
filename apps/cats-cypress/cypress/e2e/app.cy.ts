import { getGreeting } from '../support/app.po';

describe('Should display a cat fact', () => {
  beforeEach(() => {
    cy.intercept('https://catfact.ninja/fact', {
      fixture: 'cat-fact-response.json',
    }).as('getCatsFact');
    cy.visit('/');
    cy.wait(['@getCatsFact']);
  });

  it('should display title', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Cat Facts/);
  });

  it('should display a cat fact', () => {
    cy.get('[data-testid="carousel-card-content"]').contains(
      'A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.'
    );
  });
});
