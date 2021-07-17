// learn-cypress.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

const { airlines, airports, flights } = require('../../src/data/database.json');

describe('e2e', () => {
  beforeEach(() => {
    setupInterceptors();
    cy.visit('http://localhost:3000/');
    cy.get('#departureIata').select('ALA');
    cy.get('#arrivalIata').select('SUF');
    cy.get('.submit-button').click();
  });

  it('shows the header', () => {
    cy.contains('.total-price', '€ 1337');
    cy.contains('.card-header > .from-to', 'ALA → SUF');
    cy.contains('.flights-list', 'ALA → TRN');
  });

  it('shows small flights', () => {
    cy.contains(':nth-child(1) > .from-to', 'ALA → TRN');
    cy.contains(':nth-child(1) > .airline-name', 'EasyJet');
    cy.contains(':nth-child(1) > .price-small', '€ 154');
    cy.contains(':nth-child(2) > .from-to', 'TRN → NAP');
    cy.contains(':nth-child(2) > .airline-name', 'Lufthansa');
    cy.contains(':nth-child(2) > .price-small', '€ 391');
    cy.contains(':nth-child(3) > .from-to', 'NAP → SUF');
    cy.contains(':nth-child(3) > .airline-name', 'EasyJet');
    cy.contains(':nth-child(3) > .price-small', '€ 792');
  });
});

function setupInterceptors() {
  cy.intercept(
    'GET',
    'https://recruitment.shippypro.com/flight-engine/api/flights/all',
    { data: flights }
  );
  cy.intercept(
    'GET',
    'https://recruitment.shippypro.com/flight-engine/api/airlines/all',
    { data: airlines }
  );
  cy.intercept(
    'GET',
    'https://recruitment.shippypro.com/flight-engine/api/airports/all',
    { data: airports }
  );
}
