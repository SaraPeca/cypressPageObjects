/// <reference types="cypress"/>
import { elementsCadastro } from "./cadastro_usuario_elements"

export default {
    clickRegister(){
        cy.get(elementsCadastro.buttons.register)
        .click()
    },

    chekSucessRegister (name){
        cy.get(elementsCadastro.message.sucess_title)
        .should('have.text', "Cadastro realizado!")
        
        cy.get(elementsCadastro.message.sucess_subtitle)
        .should('have.text', `Bem-vindo ${name}`)
    },
    
    checkMessageError(message){
        cy.get(elementsCadastro.message.erro)
        .should('be.visible')
        .should('have.text',message)
    },

    fillName(name){
        cy.get(elementsCadastro.fields.name)
        .should('be.visible')
        .type(name)
    },

    fillEmail(email){
        cy.get(elementsCadastro.fields.email)
        .should('be.visible')
        .type(email)

    },

    fillPassword(password){
        cy.get(elementsCadastro.fields.password)
        .should('be.visible')
        .type(password)

    }

}

