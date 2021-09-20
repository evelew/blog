---
title: "Refatorar X Refazer: O que considerar antes de tomar essa decisão"
description: Nesse post eu compartilho como costumo pensar antes de escolher uma das opções
date: "2021-08-27T23:00:00.121Z"
cover_image: https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80
credit_image: Foto tirada por Cookie the Pom

credit_image_author: https://unsplash.com/@cookiethepom
---

Se você já entrou em um projeto desatualizado, com arquitetura e código confusos, provavelmente você já se perguntou:

"Será que devemos refazer esse projeto do zero? Ou devemos refatorar?"

## Como escolher

Nesse primeiro momento a melhor coisa a se fazer é listar os prós e contras de cada caminho, vamos fazer isso:

**Refazer**

Prós

- Podemos começar o projeto da maneira ideal de acordo com o contexto que temos agora
- Bibliotecas atualizadas
- Arquitetura nova/limpa
- Componentes e páginas com lógica refatorada

Contras

- É necessário muito tempo de desenvolvimento pra refazer um projeto do zero (quanto maior o projeto mais tempo levaremos pra chegar no ponto que o projeto está hoje)
- Enquanto o novo projeto é criado o produto vai ficar sem atualizações ou vai receber menos atualizações
- Teremos que dar suporte a dois projetos

**Refatorar**

Prós

- Não precisamos refazer tudo do zero, então já temos muitas configurações e componentes prontos
- O produto continua a receber atualizações e melhorias a partir do ponto atual

Contras

- Leva mais tempo até chegar no momento em que todos os componentes e páginas estejam refatorados
- A evolução da melhoria é lenta, isso pode desmotivar o time já que o resultado desse trabalho vai demorar pra aparecer

## E agora?

Na hora de definir qual caminho seguir, além de pensar nos prós e contras das 2 opções, precisamos pensar também nas características do produto:

- O projeto é pequeno ou grande?
- Tem muitos componentes e páginas?
- Qual é o histórico de mudanças do projeto e do time?
- Como o projeto precisa evoluir?
- Quanto a arquitetura atual impacta no tempo de entrega de atualizações?
- A arquitetura atual impede o projeto de crescer?

Tudo isso pode impactar na decisão, se você decide refazer o projeto e o produto precisa de muitas mudanças em um curto prazo, provavelmente a evolução vai ser muito impactada e essa escolha não vai funcionar.

Se você decide refatorar um projeto que tem muitos componentes e muitas páginas, e que a arquitetura atual impede o produto de crescer, seja pelo tempo que demora adicionar uma nova atualização, ou por questões de performance, esse é um caminho que pode não funcionar também, pq até atualizar todo o projeto os problemas de performance e de iteração podem afetar o crescimento do produto de um jeito irreversível.

## O que fazer?

Eu acredito que antes de tomar essa decisão é importante entender **de verdade** qual é o problema com o projeto. Só pq um projeto não utiliza a arquitetura que achamos ideal não quer dizer que ele precisa ser refeito ou refatorado.

Antes de escolher um caminho, acredito que o ideal é trabalhar durante alguns meses no projeto, entender melhor a arquitetura atual, entender quais são os problemas nela, de que maneira esses problemas afetam o produto e o time e depois disso começar a listar os prós e contras de refatorar ou refazer o projeto, e mais importante ainda, listar os prós e objetivos de fazer essa mudança, por exemplo:

- Com a nova arquitetura as atualizações e implementações de novas features ficarão mais simples e mais rápidas
- Quando uma pessoa nova entrar no time ela vai precisar de menos tempo pra se ambientar e vai conseguir fazer entregas em um prazo curto

Eu acredito que antes de tomar essa decisão é importante entender **de verdade** qual é o problema com o projeto. Só pq um projeto não utiliza a arquitetura que achamos ideal não quer dizer que ele precisa ser refeito ou refatorado.

Antes de escolher um caminho, acredito que o ideal é trabalhar durante alguns meses no projeto, entender melhor a arquitetura atual, entender quais são os problemas nela, de que maneira esses problemas afetam o produto e o time e depois disso começar a listar os prós e contras de refatorar ou refazer o projeto, e mais importante ainda, listar os prós e objetivos de fazer essa mudança, por exemplo:

- Com a nova arquitetura as atualizações e implementações de novas features ficarão mais simples e mais rápidas
- Quando uma pessoa nova entrar no time ela vai precisar de menos tempo pra se ambientar e vai conseguir fazer entregas em um prazo curto

---

Confesso que na maioria dos casos eu tendo a seguir pelo caminho da refatoração pq, normalmente, quando tentamos refazer um projeto, no meio do caminho descobrimos que tem muito mais lógica e configurações escondidas do que imaginávamos e acabamos levando muito mais tempo do que o esperado pra estruturar o novo projeto.

E mesmo que a atualização do projeto demore a ficar 100% completa ainda conseguimos continuar evoluindo o produto em paralelo, além disso, é comum que novas páginas e novos componentes possam ser escritos na nova arquitetura antes mesmo do projeto estar com a atualização completa.
