import LoginUsuario from '../support/page-objects/login-page-objects'

describe('Login do usuário', () => {
  beforeEach(() => {
    cy.visit('');
    cy.fixture('gera-dados-usuario.json').as('usuario');
  });
  it('Login com senha válida', () => {
    cy.get('@usuario').then((usuario) => {
    LoginUsuario.login();
    LoginUsuario.validaLoginSucesso();
    })
  });
})