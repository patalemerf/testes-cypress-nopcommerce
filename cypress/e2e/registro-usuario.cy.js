import RegistroUsuario from '../support/page-objects/registro-page-objects'

describe('Registro de usuario ', () => {
    beforeEach(() => {
      cy.gerarFixtureDadosRegistro();
      cy.visit('');
    })
    it('Registro com senha válida', () => {
      RegistroUsuario.registro();
      RegistroUsuario.validaMensagemSucesso();
    })
    })