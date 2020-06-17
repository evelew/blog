---
title: Otimizando o pre-commit
description: A vida é curta demais pra ter um pre-commit demorado
date: "2020-06-17T00:00:00.121Z"
---

Quando começamos a escrever testes unitários em um projeto, o ideal é que eles sejam executados antes de um commit ser feito. Assim, se algum teste quebrar conseguimos corrigir o erro antes mesmo de registrar um commit com problema.

Conforme o número de testes aumenta, mais lenta fica a execução desses testes e isso acaba atrapalhando no dia a dia. Se essa execução demora muito, acabamos nos distraindo e perdemos o foco ~~ou acabamos irritados~~ &#129324;.

Imagine que você tem 100 cenários de teste e fez uma mudança que afeta apenas 5 desses cenários, não tem motivo pra rodar todos os testes, o ideal é rodar apenas os testes afetados. Lembro de como era quando eu estava em um projeto em que o pre-commit demorava uns 3 ou 4 minutos. Imagine que por dia você faça 15 commits esperando 3 minutos pra rodar cada um deles, no final do dia você perdeu 45 minutos. Por isso, acontecia de várias vezes eu pular o pre-commit porque não queria esperar todo esse tempo, porém em algumas dessas vezes os testes estavam quebrados e eu só via depois.

Como não perder esse tempo todo durante o dia e garantir que os testes continuem funcionando?

Pra fazer isso precisamos instalar duas bibliotecas, a `lint-staged` e a `husky`. Com a primeira temos acesso aos arquivos que estão em stage, e com a segunda conseguimos definir scripts pra rodar antes de um commit.

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

E pronto, agora toda vez que fizermos um commit, apenas os testes que foram afetados pelas mudanças do commit atual vão ser executados. Se os arquivos alterados não tiverem nenhum teste relacionado a eles então nenhum teste é executado.

Com isso temos a segurança de que os testem estão funcionando em todos os commitss e diminuímos o tempo do pre-commit. Assim, com o tempo economizado, você consegue focar melhor nas entregas que geram valor direto pro seu usuário.
