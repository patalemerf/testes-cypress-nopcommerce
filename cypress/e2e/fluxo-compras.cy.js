import CompraProdutos from '../support/page-objects/fluxo-compras-page-objects'
import RegistroUsuario from '../support/page-objects/registro-page-objects'
import LoginUsuario from '../support/page-objects/login-page-objects'

describe('Fluxo de compras', () => {
  beforeEach(() => {
      cy.visit('');
      RegistroUsuario.registro();
      LoginUsuario.login();
    });
    it('Comprando eletroeletrônicos e gif card', () => {
        CompraProdutos.produtoGiftCard();
        CompraProdutos.carrinhoCompras();
        CompraProdutos.validaMensagemCompraSucesso();
    });
})