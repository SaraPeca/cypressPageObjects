/// <reference types = "cypress"/>
import home_page from "../support/pages/home_page";
import menu_page from "../support/pages/menu_page";
import produto_page from "../support/pages/produto_page";

describe('Produto',() =>{
    beforeEach('acessar pagina de produto',()=>{
        home_page.acessarMenuLateral()
        menu_page.acessarMenuShop()
        menu_page.acessarPaginaProdutoUnico()
    })

    it("Selecionar tamanho do produto",()=>{
        produto_page.selecionarTamanho('XL')
    })

    it("Selecionar cor do produto",()=>{
        produto_page.selecionarCor('blue')
    })

    it("Selecionar quantidade do produto",()=>{
        
    })
    it("Adicionar produto à WishList",()=>{
        
    })

    it("Adicionar produto ao comparador",()=>{
        
    })

    it('Comprar um produto',() =>{

    })

    it('Comprar um produto com desconto',() =>{

    })  
    
    it('Comprar mais de uma unidade do produto', ()=>{

    })

    it('Comprar', ()=>{

    })

})