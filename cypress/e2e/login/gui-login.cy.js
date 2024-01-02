/// <reference types="Cypress"/>


describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.loginTeste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')
    });    

    it('Validando Usuário Incorreto', () => {
        cy.loginTeste('standard_userincorreto', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')
    }); 

    it('Validando Senha Incorreta', () => {
        cy.loginTeste('standard_user', 'secret_saucez')
        cy.get('.title').should('contain', 'Products')
    });
});
