# Teste Técnico Softwrap

Esse é um projeto desenvolvido como teste técnico para a empresa Softwrap, criado com ReactJS and Tailwind.

## Sumário

- [Como iniciar](#como-iniciar)
- [O que eu utilizei nesse app](#o-que-eu-utilizei-nesse-app)
- [Como eu organizei esse código](#como-eu-organizei-esse-codigo)
- [Features que não consegui implementar](#bugs-e-features-que-nao-consegui-implementar)
- [Considerações finais](#consideracoes-finais)

## Como iniciar

Você vai precisar realizar o download e instalar o [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) para conseguir rodar a aplicação.

#### Faça a clonagem desse repositório

`git clone https://github.com/wallmartins/teste-tecnico-softwrap`

#### Entre na pasta do projeto

`cd teste-tecnico-softwrap`

### Instale todas as dependências

`npm install`

ou

`yarn`

#### Rode o projeto

`npm start `

ou

`yarn start`

Por padrão, o acesso a aplicação está configurado para abrir em [http://localhost:3000](). Se você quiser mudar a porta na qual abrirá o projeto, basta rodar o programa abaixo:

`CVA_PORT=[PORT_VALUE] npm start`

ou

`CVA_PORT=[PORT_VALUE] yarn start`

## O que eu utilizei nesse app

#### Eslint + Prettier

Eu uso eslint com as configurações do airbnb e o prettier para formatar, automaticamente, espaçamentos, ponto e vírgula, aspas e forçar identação.

Você pode encontrar as configurações de cada um deles nos arquivos:

- **.eslintrc**: esling config;
- **.prettierrc**: prettier config.

#### Tailwind

Utilizei o Tailwind para criar toda a parte de estilização do projeto, fazendo uso das suas classes e breakpoints.

Você pode encontrar as configurações dele no arquivo:

- **tailwind.config.js**: configuração do tailwind;
- **stylelint.config.js**: configuração para evitar a regra at-rule-no-unknown;

#### Firebase e Yup

Utilizei o firebase para realizar toda a parte de backend da aplicação, usando-o como banco de dados para armazenamento, criação das collections e afins.

- **Services/Firebase.js**: configuração inicial do firebase para acesso ao banco de dados
- **Utils/FirebaseUtils.js**: configuração para poder realizar requisições que precisavam do id do usuário;

Utilizei o Yup para poder fazer as validações dos dados enviados pelos usuários.

- Services/Firebase/UserSchema.js - schema para validação dos dados de usuário;

#### React e React Hooks

O uso da biblioteca React foi para desenvolver todo o core da aplicação, criando todos os componentes que a compõe. Dentre os Hooks utilizados estão: Params, Form. E como componente externo fiz o uso do ReactPaginate. O Params foi utilizado para que pudesse criar a página de cada usuário cadastrado a partir do seu id. O useForm foi escolhido para que, em conjunto com o Yup e os Schemas, fosse possível fazer tratamento dos erros e imprimir na tela uma mensagem de erro para o usuário. E o ReactPaginate foi escolhido para poder criar a paginação de todos os usuários na página ListUsers.

## Como eu organizei o código

Desenvolvi o código criando pastas por funcionalidade/finalidade:

- **Components**: contém todo o conteúdo relacionado aos componentes e os componentes em si, separados em pasta onde cada um tem relação com o outro;
- **Context**: tem o componente que cria todo o contexto da aplicação e distribui os dados para os outros;
- **Routes**: tem as rotas; na pasta Services tem todos os arquivos relacionados ao firebase;
- **Utils:** tem componentes de utilidade para a aplicação;

## Features que não consegui implementar

- **Ícone de alerta de erro dentro do input:** não consegui implementar a tempo essa feature, visto que não encontrei o pseudoelemento ou alguma forma de realizar essa função através do tailwind. Poderia ter realizado a mesma criando um style externo e importando para dentro dos componentes, entretanto, acredito que tornaria o código despadronizado e, por esse motivo, optei por não implementá-la. Porém, posso fazê-lo se me derem mais um dia de prazo.

## Considerações Finais

- Por falta de tempo, optei por não criar componentes separados para o Formulário, inputs e button, mas sei que no ideal seria melhor separar os componentes em arquivos próprios e reutilizáveis.
- Este foi um teste muito enriquecedor pra mim, não importando o resultado. Me desafiei a usar o Firebase e o Yup para realizar o armazenamento dos dados e validação dos inputs dos usuários. Consegui aprender bastante sobre o funcionamento das requisições para o próprio banco de dados, assim como, através do useForm, fazer as validações pelo Schema, como ela se dá, quais os processos que ocorrem para envio das mensagens de erros e afins.
