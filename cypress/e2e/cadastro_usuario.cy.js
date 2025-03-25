/// <reference types = "cypress" />

import home_page from "../support/pages/home_page"
import cadastroUsuario from "../support/pages/cadastro_usuario_page"
import { faker } from "@faker-js/faker"
import { devices } from "../support/devices"

const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()


devices.forEach(element => {
    
describe('Cadastro de usuário', () => {

    beforeEach('Acessar pagina de cadastro',() =>{
        if(element != 'desktop'){
            cy.viewport(element)
        }
        home_page.acessarPaginaCadastroUsuario()
    })
    it('Cadastro de usuário com nome vazio',() =>{
        cadastroUsuario.clickRegister()
        cadastroUsuario.checkMessageError('O campo nome deve ser prenchido')
    })

    it('Cadastro de usuário com email vazio', () =>{
        cadastroUsuario.fillName(randomName)
        cadastroUsuario.clickRegister()
        cadastroUsuario.checkMessageError('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com email inválido',() =>{
        cadastroUsuario.fillName(randomName)
        cadastroUsuario.fillEmail(faker.person.firstName())
        cadastroUsuario.fillPassword('123456')
        cadastroUsuario.clickRegister()
        cadastroUsuario.checkMessageError('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com senha vazia', () =>{
        cadastroUsuario.fillName(randomName)
        cadastroUsuario.fillEmail(randomEmail)
        cadastroUsuario.clickRegister()
        cadastroUsuario.checkMessageError('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro de usuário com senha inválida', () =>{
        cadastroUsuario.fillName(randomName)
        cadastroUsuario.fillEmail(randomEmail)
        cadastroUsuario.fillPassword('12345')
        cadastroUsuario.clickRegister()
        cadastroUsuario.checkMessageError('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário com sucesso', ()=> {
        cadastroUsuario.fillName(randomName)
        cadastroUsuario.fillEmail(randomEmail)
        cadastroUsuario.fillPassword('123456')
        cadastroUsuario.clickRegister()
        cadastroUsuario.chekSucessRegister(randomName)
    })
})

})
