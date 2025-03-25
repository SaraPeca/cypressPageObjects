/// <reference types= "cypress"/>
import home_page from "../support/pages/home_page"
import { faker } from "@faker-js/faker"
import login_page from "../support/pages/login_page"

const randomEmail = faker.internet.email()

describe('Login', () => {

    beforeEach('Acessar página de login', () =>{
        home_page.acessarPaginaLogin()
    })

    it('Login com email vazio', () =>{
        login_page.fillPassword('123456')
        login_page.clickLogin()
        login_page.checkMessageError("E-mail inválido.")
    })

    it('Login com email inválido', () =>{
        login_page.fillEmail("teste.com")
        login_page.fillPassword('123456')
        login_page.clickLogin()
        login_page.checkMessageError("E-mail inválido.")
    })

    it('Login com senha vazia',() =>{
        login_page.fillEmail(randomEmail)
        login_page.clickLogin()
        login_page.checkMessageError("Senha inválida.")
    })

    it('Login com senha inválida', () =>{
        login_page.fillEmail(randomEmail)
        login_page.fillPassword('12345')
        login_page.clickLogin()
        login_page.checkMessageError("Senha inválida.")
    })

    it('Login com sucesso e lembre-me',()=>{
        login_page.fillEmail(randomEmail)
        login_page.fillPassword('123456')
        login_page.selectRememberMe()
        login_page.clickLogin()
        login_page.checkMessageSucess(randomEmail)
    })

    it('Login com sucesso', () =>{
        login_page.fillEmail(randomEmail)
        login_page.fillPassword('123456')
        login_page.clickLogin()
        login_page.checkMessageSucess(randomEmail)
    })

    it('Acessar criar nova conta',() =>{
        login_page.clickCreateAccount()
    })
})