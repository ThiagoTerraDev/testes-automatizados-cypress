/// <reference types="Cypress"/>

Cypress.Commands.add('verificaProdutos', () => {
    cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
    cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
    cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
});
