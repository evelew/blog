---
title: App em Ionic + API em microsserviços rodando no Docker
description: Fiz uma proposta de funcionalidade como trabalho do MBA e achei uma boa ideia compartilhar aqui como ficou o resultado final
date: "2021-09-20T00:00:00.121Z"
cover_image: https://images.unsplash.com/photo-1586776977607-310e9c725c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80
credit_image: Foto tirada por Ken Suarez
credit_image_author: https://unsplash.com/@kensuarez
---

Eu tô fazendo um MBA em Engenharia de Software e um dos trabalhos do módulo atual era criar uma proposta de funcionalidade pra alguma startup unicórnio, eu escolhi o Nubank pois é o único serviço que uso das opções que estavam disponíveis.

Pra criar essa proposta nós precisávamos utilizar a seguinte stack:

- Ionic pra fazer o mobile da aplicação
- Criar uma API numa arquitetura de microsserviços
- Rodar essa API dentro do Docker

## Funcionalidade proposta

A funcionalidade que eu propus foi a seguinte:

> Dentro da NuConta poderíamos adicionar a opção de criar carteiras
> diferentes, dando aos clientes a opção de definir um nome para cada
> carteira e escolher as condições, prazo e rendimento do CDI, em que a
> pessoa quiser guardar esse dinheiro. Com essa funcionalidade os clientes
> poderiam ter carteiras com objetivos diferentes e teriam mais liberdade e
> autonomia em relação às suas reservas financeiras.

> Além de criar diferentes carteiras, os clientes também poderiam guardar
> mais dinheiro nas carteiras que já estão criadas.

<iframe width="640" height="360" src="https://www.loom.com/embed/85a7f97465234d1fbddc476721b98eaf" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Ionic

Eu já tinha mexido com o Ionic há muito tempo, quando ele ainda usava o Cordova pra fazer o processo de build, e esse processo era muito complicado porque aconteciam muitos erros, então eu já comecei o trabalho esperando que essa parte fosse ser bem complicada.

Quando comecei a ver documentação atual do Ionic vi que muita coisa mudou, o processo de build tá super simples, eles evoluíram muito a ferramenta, ela tem uma documentação muito completa, com muitos exemplos e explicações bem claras.

O Ionic pode ser usado com vários frameworks (React, Vue, Angular e Stencil) e até com JS puro. A configuração default que é gerada pela CLI deles tem o TypeScript configurado, a recomendação do time do Ionic é utilizar o TS mas você pode remover ele também, inclusive eles dão todo o passo a passo pra você remover essas configurações do projeto.

Na minha solução final eu utilizei o React e a Context API pra criar stores separadas para cada fluxo, com isso o fluxo de criação de uma carteira ficou com uma store dedica a ele e o fluxo de atualização da carteira também ficou com uma store exclusiva.

Eu removi o TS porque tive muitos problemas na hora de criar minhas stores, como eu não tenho muito conhecimento de TS eu estava perdendo muito tempo pra resolver esses problemas e achei melhor remover ele, afinal eu tinha uma data limite pra entregar o trabalho.

Resultado final: [https://github.com/evelew/fiap-nubank-client](https://github.com/evelew/fiap-nubank-client)

## API em microsserviços

Eu já construí algumas APIs mas nunca tinha criado nada seguindo uma arquitetura de microsserviços, li sobre o assunto e entendi que eu poderia criar os serviços isolados e depois conectar tudo através de um proxy e foi exatamente o que eu fiz.

Como a solução que propus envolvia 2 domínios de negócio muito claros (carteira e rendimentos) eu não tive muita dificuldade de definir como quebraria meus serviços.

Pra criar esses 2 serviços eu utilizei uma arquitetura simples, uma das propostas do trabalho era usar as camadas de Domain, Repository, Service e Controller. Como ficou minha arquitetura:

- **Domain**: Os meus serviços foram quebrados por domínio, então eu tinha um serviço que cuidava de toda a parte relacionada a carteira e outro que cuidava de tudo relacionado aos rendimentos.
- **Repository**: Nessa camada ficou toda a parte que precisava se comunicar com o banco de dados (MongoDB), então aqui tinham todos os updates, inserts e gets feito nos documentos/coleções.
- **Service**: Aqui ficou toda a lógica que precisava acontecer antes da comunicação com o banco de dados ser feita. Por exemplo, se eu quiser guardar uma quantia numa carteira existente, antes de fazer esse update eu preciso saber quanto de dinheiro já existe nessa carteira, certo? Essa lógica de fazer o GET da carteira, somar o valor atual com o novo valor que está sendo guardado ficou nessa camada de serviço.
- **Controller**: O controller ficou responsável por conectar os endpoints da API aos serviços corretos.

Com isso eu consegui criar uma arquitetura bem simples onde cada camada tem a sua responsabilidade bem definida.

Para centralizar esses 2 serviços em uma API única eu criei um proxy que verifica qual é o domínio que está sendo chamado e redireciona essa requisição HTTP para a API correta.

Serviço responsável pelas carteiras: [https://github.com/evelew/fiap-nubank-service-wallets](https://github.com/evelew/fiap-nubank-service-wallets)

Serviço responsável pelos rendimentos: [https://github.com/evelew/fiap-nubank-service-incomes](https://github.com/evelew/fiap-nubank-service-incomes)

Proxy responsável por centralizar os serviços: [https://github.com/evelew/fiap-nubank-proxy](https://github.com/evelew/fiap-nubank-proxy)

## Docker

O Docker é uma ferramenta muito famosa então eu já tinha ouvido falar sobre ele, entendia +- qual problema ele resolve mas eu nunca tinha chegado a configurar nada.

Eu precisava rodar minha API e meu banco de dados nele, num primeiro momento pensei em levantar um container com esses 2 serviços mas pesquisando sobre eu descobri que isso não é uma boa prática e que o ideal é cada serviço ter o seu próprio container, então precisava de um container pra API e de outro container apenas para o banco de dados. Pra fazer essa separação eu utilizei o docker-compose.

Quando eu li sobre a proposta do trabalho imaginei que essa seria a parte mais complexa, mas no final das contas foi uma das partes mais simples - ainda assim eu quebrei um pouco a cabeça com alguns bugs que rolaram mas todos foram resolvidos até que rapidamente pra quem nunca tinha mexido com a ferramenta.

Dockerfile: [https://github.com/evelew/fiap-nubank-proxy/blob/main/Dockerfile](https://github.com/evelew/fiap-nubank-proxy/blob/main/Dockerfile)

Configuração Docker Compose: [https://github.com/evelew/fiap-nubank-proxy/blob/main/docker-compose.yml](https://github.com/evelew/fiap-nubank-proxy/blob/main/docker-compose.yml)

---

Esse foi o trabalho que mais gostei de fazer no MBA porque nele precisei mexer com muitas coisas que não tô acostumada a mexer no dia a dia, e no final fiquei bem satisfeita com o resultado! Espero que te seja útil de alguma maneira :)
