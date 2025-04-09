import { elementsMenu } from "./menu_elements"
import { elementsProduct } from "./produto_elements"

export default{
    acessarMenuShop(){
       cy.get(elementsMenu.menuLateral.menuShop).click() 
       cy.get(elementsMenu.menuLateral.menu).should('be.visible')
    },

    acessarPaginaProdutoUnico(){
        cy.get(elementsMenu.menuShop.opcaoMenu)
        .find(elementsMenu.menuShop.produtoUnico)
        .click()
        cy.get(elementsProduct.sessions.productPageSession).should('be.visible')
    }
}