/// <reference types ="cypress"/>
import { elementsProduct } from "./produto_elements"

export default{

    selecionarTamanho(tamanho){
        cy.get(elementsProduct.fields.tamanho).select(tamanho)
        cy.get(elementsProduct.fields.tamanho).should('contain', tamanho)
    },

    selecionarCor(cor){
        cy.get(elementsProduct.fields.cor+cor)
        .click()
    },
    
    adicionarQtd(){

    },

    removerQtd(){

    },

    adicionarnoCarrinho(){

    },

    adicionarWishlist(){

    },

    adicionarComparador(){
        
    }

}
