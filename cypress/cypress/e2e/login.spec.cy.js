
/// <reference types= 'cypress'/>

context('Funcionalidade login', () => {

    it('deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_teste@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
        
    });
    
    it('Deve exibir mensagem de senha ou usuario invalidos' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno.teste@teste.com')
        cy.get('#password').type ('teste-teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Verifique novamente')
        
    })

    it('Deve exibir mensagem de senha  invalida' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_teste@teste.com')
        cy.get('#password').type ('teste-teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro')
        
    })
})


