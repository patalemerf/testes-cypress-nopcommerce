import { elementosLogin } from '../elementos/login-elementos'
import dados from '../../fixtures/gera-dados-usuario.json'

class LoginUsuario{
    login(){
        cy.get(elementosLogin.iconeLogin).click();
        cy.get(elementosLogin.emailLogin).type(dados.hits.email);
        cy.get(elementosLogin.senhaLogin).type(dados.hits.senha);
        cy.get(elementosLogin.botaoEntrar).click();
    };
    validaLoginSucesso(){
        cy.get(elementosLogin.mensagemBemVindo).should('be.visible')

    }
}

export default new LoginUsuario();