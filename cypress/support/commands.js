import { faker } from '@faker-js/faker'

Cypress.Commands.add('gerarDadosUsuario', () => {

    cy.writeFile('cypress/fixtures/gera-dados-usuario.json', {

        'hits':Cypress._.times(1, () => {
            return {
              'primeiro_nome':`${faker.person.firstName()}`,
              'ultimo_nome':`${faker.person.lastName()}`,
              'email':`${faker.internet.email()}`,
              'empresa_nome':`${faker.company.name()}`,
              'senha':`${faker.internet.password()}`,
              'data_aniversario':`${faker.number.bigInt({min: 1, max: 31})}`,
              'mes_aniversario':`${faker.number.bigInt({min: 1, max: 12})}`,
              'ano_aniversario':`${faker.number.bigInt({min: 1990, max: 2023})}`,
              'cidade':`${faker.location.city()}`,
              'endereco': `${faker.location.streetAddress()}`,
              'codigo_postal': `${faker.location.zipCode()}`,
              'numero_telefone': `${faker.phone.number()}`,
              'nome_recebedor': `${faker.person.fullName()}`,
              'email_recebedor': `${faker.internet.email()}`,
              'mensagem_recebedor': `${faker.lorem.sentence()}`,
            }
        })[0]
    })
})