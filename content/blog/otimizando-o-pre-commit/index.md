---
title: Otimizando o pre-commit
description: A vida é curta demais pra ter um pre-commit demorado
date: "2020-06-17T00:00:00.121Z"
---

Quando começamos a escrever testes unitários em um projeto o ideal é que eles sejam executados antes de um commit ser feito, assim se algum teste quebrar conseguimos corrigir o erro antes mesmo de registrar um commit com problema.

Conforme o número de testes aumenta mais lenta fica a execução desses testes e isso acaba atrapalhando no dia a dia, se essa execução demora muito acabamos nos distraindo e perdemos o foco, ~~ou acabamos irritados~~ &#129324;.

Imagine que você tem 100 cenários de teste e fez uma mudança que afeta apenas 5 desses cenários, não tem motivo pra rodar todos os testes, o ideal é rodar apenas os testes afetados.

Pra fazer isso precisamos instalar duas bibliotecas, a `lint-staged` e a `husky`, com a primeira temos acesso aos arquivos que estão em stage, e com a segunda conseguimos definir scripts pra rodar antes de um commit.

Então primeiro instalamos a lint-staged:

```
  npm install —-save-dev lint-staged
```

e depois, no nosso package.json, adicionamos a configuração que queremos:

```js
  // package.json

  "lint-staged": {
    "**/*.+(js|jsx|json|css)": [ // os tipos de arquivos que queremos verificar
      "jest --findRelatedTests" // aqui rodamos o jest com a flag "—-findRelatedTests"
    ]
  }

  /*
    Essa flag diz pro jest "olha só, roda apenas os testes relacionados a esses arquivos que tô te falando".
  */
```

Então, com essa configuração vamos rodar apenas os testes que foram afetados pelos arquivos do tipo `js, jsx, json e css` e que estão em stage.

Depois disso instalamos o `husky` e adicionamos o script `lint-staged` pra ser executado no pre-commit:

```js
  // package.json

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

E pronto, agora toda vez que fizermos um commit apenas os testes que foram afetados pelas mudanças do commit atual vão ser executados, se os arquivos alterados não tiverem nenhum teste relacionado a eles então nenhum teste é executado.
