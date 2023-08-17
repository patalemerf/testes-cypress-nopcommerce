import { el } from '../elementos/registro-elementos'
import dados from '../../fixtures/gera-dados-usuario.json'

class RegistroUsuario{
    registro(){
        cy.get(el.iconeRegistro).click();
        cy.get(el.selecioneGenero).click();
        cy.get(el.escrevaPrimeioNome).type(dados.hits.primeiro_nome);
        cy.get(el.escrevaUltimoNome).type(dados.hits.ultimo_nome);
        cy.get(el.selecioneDiaAniversario).select(dados.hits.data_aniversario);
        cy.get(el.selecioneMesAniversario).select(dados.hits.mes_aniversario);
        cy.get(el.selecioneAnoAniversario).select(dados.hits.ano_aniversario);  
        cy.get(el.escrevaEmail).type(dados.hits.email);
        cy.get(el.escrevaEmpresa).type(dados.hits.empresa_nome);
        cy.get(el.escrevaSenha).type(dados.hits.senha);
        cy.get(el.confirmaSenha).type(dados.hits.senha);
        cy.get(el.botaoRegistro).click();
    };
    validaMensagemSucesso(){
        cy.get(el.confirmacaoRegistro).should('be.visible').and('contain', el.mensagemSucesso);
    };
    limparCamposObrigatorios(){
        cy.get(el.iconeRegistro).click();
        cy.get(el.escrevaPrimeioNome).clear();
        cy.get(el.escrevaUltimoNome).clear();
        cy.get(el.escrevaEmail).clear();
        cy.get(el.escrevaSenha).clear();
        cy.get(el.confirmaSenha).clear();
        cy.get(el.botaoRegistro).click();
    };
    validaMensagensErro(){
        cy.get(el.ErroCamposObrigatorios.primeiroNome).should('be.visible').and('contain', 'First name is required.');
        cy.get(el.ErroCamposObrigatorios.ultimoNome).should('be.visible').and('contain', 'Last name is required.');
        cy.get(el.ErroCamposObrigatorios.email).should('be.visible').and('contain', 'Email is required.');
        cy.get(el.ErroCamposObrigatorios.senha).should('be.visible').and('contain', 'Password is required.');
        cy.get(el.ErroCamposObrigatorios.confirmaSenha).should('be.visible').and('contain', 'Password is required.');
    }
}

export default new RegistroUsuario();