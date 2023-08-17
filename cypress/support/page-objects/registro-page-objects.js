import {el} from '../elementos/registro-elementos'
import dados from '../../fixtures/gera-dados-registro.json'

class RegistroUsuario{
    registro(){
        cy.get(el.iconeRegistro).click();
        cy.get(el.selecioneGenero).click();
        cy.get(el.escrevaPrimeiraNome).type(dados.hits.primeiro_nome);
        cy.get(el.escrevaUltimoNome).type(dados.hits.ultimo_nome);
        cy.get(el.selecioneDiaAniversario).select(dados.hits.data_aniversario);
        cy.get(el.selecioneMesAniversario).select(dados.hits.mes_aniversario);
        cy.get(el.selecioneAnoAniversario).select(dados.hits.ano_aniversario);  
        cy.get(el.escrevaEmail).type(dados.hits.email);
        cy.get(el.escrevaCompany).type(dados.hits.empresa_nome);
        cy.get(el.escrevaSenha).type();
        cy.get(el.confirmaSenha).type();
        cy.get(el.botaoRegistro).click();
    };
    validaMensagemErro(){
        cy.get(el.erroSenha.primeiroElemento).should('be.visible').and('contain', el.mensagem);
    };
    validaMensagemSucesso(){
        // cy.get(el.).should('be.visible').and('contain', el.mensagemSucesso);
    }

}

export default new RegistroUsuario();