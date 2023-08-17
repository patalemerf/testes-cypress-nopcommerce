
#  Testes automáticos nopcommerce

Suíte de de testes End to End para a plataforma [nopcommerce](https://demo.nopcommerce.com/) .

## Objetivos

Este projeto é uma estrutura básica para começar a escrever testes automatizados usando o Cypress versão 12.13 com JavaScript, utilizando o padrão de Page Objects.

## Pré-requisitos

-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Node](https://nodejs.org/en/)
-   [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)

## Instalação

1.  Clone o projeto na pasta de sua preferência
    -   *SSH* `git@github.com:patalemerf/projeto-qualityMap-nopcommerce.git`
    -   *HTTPS* `https://github.com/patalemerf/projeto-qualityMap-nopcommerce.git`

2.  Acesse a pasta do projeto projeto-qualityMap-nopcommerce

cd projeto-qualityMap-nopcommerce


3.  Realize a instalação das dependências.


`npm install`


4.  Verifique a instalação do cypress.


`npm run cy:verify`


## Utilização & Execução
É utilizado o padrão definido pelo Cypress e pode ser explorado através do link: [Cypress - Command Line](https://docs.cypress.io/guides/guides/command-line).

### [](#padr%C3%A3o)Padrão

*Por linha de comando*

`npx cypress run`

*Pela interface do Cypress*

`npx cypress open `


   
## Estrutura do projeto

    cypress/
     fixtures/
     integration/
       registro-usuario.cy.js.
     plugins/
       index.js
     support/
       commands.js
       index.js
     page-objects/
       registro-page-objects.js, 
     elements/
       registro-elementos.js
     cypress.config.js
    
- **cypress.config.js:** Arquivo de configuração do Cypress. Aqui você pode configurar opções como URL base, viewport, tempo de espera padrão, entre outros.

- **fixtures/**: Pasta onde você pode colocar arquivos com dados de teste que serão usados em seus testes. Nesse caso, utilizei a biblioteca faker para gerar uma massa de testes mockada.

- **integration/:** Pasta onde você escreverá seus testes. Neste exemplo, há dois arquivos de teste de exemplo: registro-usuario.cy.js.

- **support/:** Pasta onde você pode colocar arquivos de suporte para seus testes. O arquivo commands.js é usado para adicionar comandos personalizados ao Cypress, e o arquivo index.js é usado para importar e configurar plugins e outras dependências.

- **page-objects/:** Pasta onde você pode colocar seus Page Objects. Neste exemplo, há um arquivo registro-page-objects.js, que contém o fluxo de um registro de um usuário.

- ***elements.js:*** O arquivo elements.js é comumente usado para armazenar seletores e elementos de tela usados em testes de automação. A melhor organização de arquivos de elementos de tela depende da estrutura e tamanho do seu projeto, mas aqui estão algumas diretrizes gerais:pasta onde contém os elementos da página de registro, com o arquivo registro-elementos.js.

## Exemplo de teste

import RegistroUsuario from '../support/page-objects/registro-page-objects'
  describe('Registro de usuario ', () => {
    it('Registro com senha válida', () => {
      RegistroUsuario.registro();
      RegistroUsuario.validaMensagemSucesso();
})
})

Neste exemplo, importamos a classe registroUsuario do arquivo registro-page-objects.js em ../support/page-objects/registro-page-objects,js. Em seguida, criamos uma nova instância da classe registroUsuario e usamos seus métodos para visitar a página de registro.
Como utilizei a biblioteca faker, recomendo a leitura da documentação em [Faker.js](https://fakerjs.dev/guide/).

