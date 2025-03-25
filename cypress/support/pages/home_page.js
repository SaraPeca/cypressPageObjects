/// <reference types = "cypress"/>
import { elementsHome } from "./home_page_elements"

export default{
    acessarPaginaCadastroUsuario(){
        cy.visit('/')
        .get(elementsHome.header.topHeader).should('be.visible')
        cy.get(elementsHome.pages.cadastro).click()
        cy.url().should('include', "/register")
    },

    acessarPaginaLogin(){
        cy.visit('/')
        .get(elementsHome.header.topHeader).should('be.visible')
        cy.get(elementsHome.pages.login).should('be.visible')
        .click()
        cy.url().should('include', "/login")
    }
}