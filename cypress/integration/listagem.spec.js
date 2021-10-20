/// <reference types="cypress" />
/* Controle de stado da aplicação:
   -> manipular requisições
   -> manipular storages (local,session)
*/
describe('Listagem', () => {
    it('Quando não houver cadastros, então listagem deverá ser vazia.', () => {
        cy.fixture('listagem-vazia').then(data =>{
            window.localStorage.setItem('data',JSON.stringify(data))
        })
        
        cy.visit('https://form-agilizei.netlify.app/listagem')
        
        cy.get('table tbody tr').should('have.length',0)
    });

    it('Quando houver cadastros, então listagem deverá exibida.', () => {
        cy.fixture('listagem-com-itens').then(data =>{
            window.localStorage.setItem('data',JSON.stringify(data))
        })
        
        cy.visit('https://form-agilizei.netlify.app/listagem')

        cy.get('table tbody tr').should('have.length',2)
        cy.get('table tbody tr td').should('contain','leonardo')

    });
});