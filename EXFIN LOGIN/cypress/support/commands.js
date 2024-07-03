
Cypress.Commands.add('login',(email, senha) => { 
  cy.get("#email").type(email)
  cy.get("#password").type(senha);
  cy.contains('button','ENTRAR').click()
})

Cypress.Commands.add('emailInvalido',() => { 
  cy.get("#email").type(`ERROR`)
  cy.contains("E-mail inválido").should('be.visible')
    .wait(300)
  cy.get("#email").clear()
})

Cypress.Commands.add('senhaInvalida',(emailCorreto) => { 
  cy.get("#email").type(emailCorreto)
  cy.get("#password").type("Error")
  cy.contains('button','Entrar').click();
  cy.contains("Credenciais inválidas!").should('be.visible')
  cy.get("#email").clear()
})

Cypress.Commands.add('áreaErrada',(emailContra) => { 
  cy.get("#email").type(emailContra)
  cy.get("#password").type("Error")
  cy.contains('button','Entrar').click();
  cy.contains("Área de login incompatível com o tipo de usuário!").should('be.visible')
  cy.get("#email").clear()

})

  function verificaemail(){
    cy.get("#email").type(`ERROR`)
    cy.contains("E-mail inválido").should('be.visible')
      .wait(300)
    cy.get("#email").clear()
  }


 function verificaSenha(emailVerdadeiro){
      cy.get("#email").type(emailCorreto)
      cy.get("#password").type("Error")
      cy.contains('button','Entrar').click();
      cy.contains("Credenciais inválidas!").should('be.visible')
      cy.get("#email").clear()
    }

    function verificaArea (emailContrario){
      cy.get("#email").type(emailContra)
      cy.get("#password").type("Error")
      cy.contains('button','Entrar').click();
      cy.contains("Área de login incompatível com o tipo de usuário!").should('be.visible')
      cy.get("#email").clear()
   }

 //function criarConta(){
    cy.contains('button','criar conta').click()
    cy.url().should('include','/signup')
 //}