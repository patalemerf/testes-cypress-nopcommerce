import RegistroUsuario from '../support/page-objects/registro-page-objects'

describe('Registro de usuario ', () => {
    beforeEach(() => {
      cy.gerarDadosUsuario();
      cy.visit('');
    });
    it('Registro de um novo usuario com sucesso', () => {
      RegistroUsuario.registro();
      RegistroUsuario.validaMensagemSucesso();
    });
    it('Registro com campos obrigatórios em branco', () => {
      RegistroUsuario.limparCamposObrigatorios();
      RegistroUsuario.validaMensagensErro();
    });
    })