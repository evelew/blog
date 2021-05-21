---
title: Definindo uma cobertura mínima de testes no Jest com a propriedade coverageThreshold
description: Como facilitar a vida com uma configuração muito simples
date: "2021-05-20T00:00:00.121Z"
---

Imagine que você que cobriu o seu fluxo mais importante com testes, sua cobertura ta em 85% e você ta feliz da vida, algum tempo depois esse fluxo sofre algumas mudanças, a cobertura de testes cai e ninguém repara. Como esse é o fluxo mais importante da sua aplicação é importante que ele tenha uma cobertura mínima de testes, e com essas mudanças a cobertura acaba ficando longe de ser boa...

Nós podemos sempre olhar o relatório de cobertura pra ver se não estamos muito longe do mínimo que tínhamos definido, mas ficar dependente de uma avaliação humana para checar se o fluxo X está com uma cobertura boa é ruim por 3 motivos:

1.  As pessoas do time vão esquecer de olhar pra isso em algum momento
2.  Isso não é escalável, se precisarmos garantir X% de cobertura em 15 lugares diferentes ferrou
3.  ~~Que coisa chata de ficar fazendo na mão~~

Pra nossa sorte com o Jest conseguimos configurar um número mínimo de cobertura de testes. 🥳

Nós podemos definir essa cobertura de maneira global, e também podemos definir diferentes coberturas mínimas pra diferentes arquivos/caminhos de arquivos.

# global

```js
// package.json
{
  ...
  "jest": {
    "coverageThreshold": {
      "global": {
        "functions": 70, // cobertura relacionada as funções do projeto
        "lines": 60, // cobertura relacionada as linhas do projeto
        "statements": 50 // cobertura relacionada as condições que temos, por ex: if e switch
        "branches": 70, // cobertura relacionada aos if/switch, mas dessa vez é validado se os blocos dos diferentes cenários foram executados (if/else if/else e os N cases que podem existir dentro de um switch)
      }
    }
  }
}
```

# usando uma pasta como referência

```js
// package.json
{
  ...
  "jest": {
    "coverageThreshold": {
      "./src/helpers/**/*.js": {
        "statements": 90
      }
    }
  }
}
```

# definindo essa cobertura pra um arquivo específico

```js
// package.json
{
  ...
  "jest": {
    "coverageThreshold": {
      "./src/api/payments/index.js": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  }
}
```

Com essa configuração feita podemos rodar essa validação no nosso pre-push/pre-commit e assim conseguimos saber se estamos ou não com as metas de cobertura de testes atingidas de uma maneira muito mais simples e automática.
