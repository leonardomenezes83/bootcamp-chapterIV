  /// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance

describe('Cadastro', () => {
  before(() => {
    cy.visit('https://form-agilizei.netlify.app/')
  });

  it('Cadastrar', () => {
    cy.get('input[name=firstName]').type(chance.first())
    cy.get('input[name=lastName]').type(chance.last())
    cy.get('textarea[name=adress]').type(chance.address())
    cy.get('input[name=emailAdress]').type(chance.email())

    cy.get('input[value=m]').click()

    cy.get('input[type=checkbox]').check(['Netflix','Livros'])
   // cy.get('input[type=checkbox]').check('Livros')

    cy.get('select#countries').select('Dinamarca',{force: true})
    
    cy.get('select#years').select('1983',{force: true})
    cy.get('select#months').select('Dezembro',{force: true})
    cy.get('select#days').select('19',{force: true})

    cy.get('input#firstpassword').type('Leo@123')
    cy.get('input#secondpassword').type('Leo@123')

    cy.get('#submitbtn').click()
    //cy.contains('Finalizar cadastro').click()  <<FUNCIONA! Porém, não é uma boa prática.

    //redirecionado para nova página.
    //verificar URL 
    cy.url().should('contain','https://form-agilizei.netlify.app/listagem') //verifica qual url está!!!!
  
  });
})