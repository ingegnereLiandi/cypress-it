/// <reference types= 'cypress'/>


import { faker } from "@faker-js/faker";

describe('Funcionallidade Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')

    });

    afterEach(() => {
        //cy.screenshot()
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get(':nth-child(4) > .page-numbers').click()
        cy.get('.post-4003 > .product-block > .caption > .meta > .infor')
        //.first()
        //.last()
        //.eq(7)
        .contains('Eos V-Neck Hoodie')
        .click()    

    })

        it.only('Deve adicionar um produto ao carrinho', () => {
var quantidade= 15
            
            cy.get(':nth-child(4) > .page-numbers').click()
            cy.get('.post-4003 > .product-block > .caption > .meta > .infor').contains('Eos V-Neck Hoodie')
            cy.get('.post-4003 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Orange').click()
            cy.get('.input-text').click().clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

        });
       

  
 
});