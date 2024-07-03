describe("ExFin Login", () => {
  it("tests ExFin Login", () => {
    cy.viewport(2500, 1225);
    cy.visit("https://staging.dbrnkj4j83fda.amplifyapp.com/");
    

    //login Empresa
    cy.get("div.bAEwsa > div:nth-of-type(1) button").click();
    cy.contains('a','Esqueci minha senha').click()
      .url().should('include','/forgot-password')
    cy.contains('button','RECUPERAR SENHA').click()
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains('button','CANCELAR').click({force:true})

    cy.contains('button','ENTRAR').click();
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains("Senha é obrigatória").should('be.visible')

        //emailinvalida
    cy.get("#email").type(`ERROR`)
    cy.contains("E-mail inválido").should('be.visible')
      .wait(300)
    cy.get("#email").clear()

        //senhainvalida
    cy.get("#email").type(EmailEmpresa)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click({force:true});
    cy.contains("Credenciais inválidas!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()

      //area errada
    cy.get("#email").type(EmailCredor)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click();
    cy.contains("Área de login incompatível com o tipo de usuário!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()


    cy.get("#email").type(EmailEmpresa)
    cy.get("#password").type(SenhaGeral);
    cy.contains('button','ENTRAR').click()
      .url().should('include','/home')
    cy.get('.hSLKOr').contains('Empresa').should('be.visible').wait(5000)
    cy.get("p.bcqIxB").click({force:true}); 
    cy.contains('button','Sair').click().wait(200)
    cy.contains('button','Confirmar').click({force:true})


    //loginCredor
    cy.get("div.bAEwsa > div:nth-of-type(2) button").click();
    cy.contains('a','Esqueci minha senha').click()
      .url().should('include','/forgot-password')
    cy.contains('button','RECUPERAR SENHA').click().wait(600)
      cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains('button','CANCELAR').click({force:true})

    cy.contains('button','ENTRAR').click();
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains("Senha é obrigatória").should('be.visible')

      //emailinvalidO
    cy.get("#email").type(`ERROR`)
    cy.contains("E-mail inválido").should('be.visible')
      .wait(300)
    cy.get("#email").clear()

        //senhainvalida
    cy.get("#email").type(EmailCredor)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click({force:true});
    cy.contains("Credenciais inválidas!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()

      //area errada
    cy.get("#email").type(EmailEmpresa)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click();
    cy.contains("Área de login incompatível com o tipo de usuário!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()


    cy.get("#email").type(EmailCredor);
    cy.get("#password").type(SenhaGeral);
    cy.contains('button','ENTRAR').click({force:true})
      .url().should('include','/home')
    cy.get('.hSLKOr').contains('Credor').should('be.visible').wait(5000)
    cy.get('.MuiButtonBase-root').click({force:true});
    cy.contains('button','Sair').click().wait(200)
    cy.contains('button','Confirmar').click({force:true})
  
  
    //Login Consultor
    cy.contains('button','ACESSO CONSULTOR').click()
    cy.contains('a','Esqueci minha senha').click().url().should('include','/forgot-password')
      .url().should('include','/forgot-password')
    cy.contains('button','RECUPERAR SENHA').click().wait(600)
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains('button','CANCELAR').click({force:true})

    cy.contains('button','ENTRAR').click();
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains("Senha é obrigatória").should('be.visible')

      //emailinvalida
    cy.get("#email").type(`ERROR`)
    cy.contains("E-mail inválido").should('be.visible')
      .wait(300)
    cy.get("#email").clear()

        //senhainvalida
    cy.get("#email").type(EmailAdmin)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click({force:true});
    cy.contains("Credenciais inválidas!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()

      //area errada
    cy.get("#email").type(EmailCredor)
    cy.get("#password").type("Error")
    cy.contains('button','ENTRAR').click();
    cy.contains("Área de login incompatível com o tipo de usuário!").should('be.visible')
    cy.get("#email").clear()
    cy.get("#password").clear()

    
    cy.get("#email").type(EmailAdmin);
    cy.get("#password").type("12344321");
    cy.contains('button','ENTRAR').click({force:true});
    cy.url().should('include','/consultant')
    cy.contains('button','ENTRAR').click();
    cy.url().should('include','/home')
    cy.get('.hSLKOr').contains('Consultor').should('be.visible').wait(1000)


  })
})
