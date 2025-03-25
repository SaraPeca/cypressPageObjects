///<reference types = "cypress"/>

import {elementsLogin} from './login_elements'

export default{
    clickLogin (){
        cy.get(elementsLogin.buttons.login).should('be.visible')
        .click()
    },
    clickCreateAccount(){
        cy.get(elementsLogin.buttons.creatAccount)
        .click()
        cy.url().should('include', '/register')
    },

    fillEmail(email){
        cy.get(elementsLogin.fields.email).should('be.visible')
        .type(email)
    },

    fillPassword(password){
        cy.get(elementsLogin.fields.password).should('be.visible')
        .type(password)
    },

    selectRememberMe(){
        cy.get(elementsLogin.fields.rememberMe).should('be.visible')
        .check()
    },

    checkMessageError(message){
        cy.get(elementsLogin.messages.error)
        .should('have.text', message)
    },

    checkMessageSucess(email){
        cy.get(elementsLogin.messages.sucess_title).should('have.text', "Login realizado")
        cy.get(elementsLogin.messages.sucess_subtitle).should('have.text',`Olá, ${email}`)
    }
}