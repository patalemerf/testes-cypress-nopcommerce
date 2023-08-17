import { elementosCompras } from "../elementos/fluxo-compras-elementos";
import dados from '../../fixtures/gera-dados-usuario.json'

class CompraProdutos{
    produtoGiftCard(){
        cy.get(elementosCompras.iconeBusca).type('gift card');
        cy.get(elementosCompras.botaoBuscar).click();
        cy.get(elementosCompras.selecionaGiftCard).click();
        cy.get(elementosCompras.recebedorGiftCard).type(dados.hits.nome_recebedor)
        cy.get(elementosCompras.emailRecebedorGiftCard).type(dados.hits.email_recebedor);
        cy.get(elementosCompras.mensagemGiftCard).type(dados.hits.mensagem_recebedor);
        cy.get(elementosCompras.botaoAdicionarGiftCard).click();
        cy.get(elementosCompras.carrinhoCompras).click();
    };
    carrinhoCompras(){
        cy.get(elementosCompras.checkbox).click();
        cy.get(elementosCompras.botaoCheckout).click();
        cy.get(elementosCompras.selecionaPais).select('Brazil');
        cy.get(elementosCompras.digitaCidade).type(dados.hits.cidade);
        cy.get(elementosCompras.digitaEndereco).type(dados.hits.endereco);
        cy.get(elementosCompras.digitaCEP).type(dados.hits.codigo_postal);
        cy.get(elementosCompras.digitaTelefone).type(dados.hits.numero_telefone);
        cy.get(elementosCompras.botaoContinue.endereco).click();
        cy.get(elementosCompras.botaoContinue.metodoPagamento).click();
        cy.get(elementosCompras.botaoContinue.infoPagamento).click();
        cy.get(elementosCompras.confirmaCompra).click();
        cy.get(elementosCompras.MensagemConfirmacaoCompra).should('be.visible');
    };
    validaMensagemCompraSucesso(){
        cy.get(elementosCompras.mensagemSucessoCompra).should('be.visible');
    }
}

export default new CompraProdutos();