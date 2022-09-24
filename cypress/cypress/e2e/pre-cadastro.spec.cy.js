/// <reference types= 'cypress'/>


import { faker } from "@faker-js/faker";

describe('Funcionallidade pre-cadastro', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        //cy.screenshot()
    });


    it.only('Deve completar o pre-cadastro com sucesso', () => {

        let emailFaker= faker.internet.email ()  
        let primeiroNome= faker.name.firstName()     
        let ultimoNome= faker.name.lastName()
        

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type ('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'sucesso')

    });

    it('Deve completar o pre-cadastro com sucesso', () => {
        
        cy.get('#reg_email').type('douglasliandi@hotmail.com1')
        cy.get('#reg_password').type ('teste@teste.com1')
        cy.get(':nth-child(4) > .button').click()

    });
    
    it('Deve completar o pre-cadastro com sucesso', () => {
        
        cy.get('#reg_email').type('douglasliandi@hotmail.com1')
        cy.get('#reg_password').type ('teste@teste.com1')
        cy.get(':nth-child(4) > .button').click()

    });
});