---
title: Como rodar scripts paralelamente
description: A vida é curta demais pra ter um pre-commit demorado²
date: "2021-06-21T00:00:00.121Z"
---

Quando configuramos alguns scripts pra rodarem no pre-commit/pre-push nosso tempo de desenvolvimento pode acabar sendo afetado pela demora pra executar essas tarefas, mas a gente consegue também diminuir esse tempo de espera rodando tarefas em paralelo.

Com o pacote `concurrently` nós conseguimos rodar vários scripts paralelamente, e pra fazer isso é bem simples, primeiro instalamos o pacote:

```js
npm i concurrently
```

Com isso temos o pacote instalado no nosso projeto, agora pra rodar os scripts ao mesmo tempo é só executar o comando:

```js
concurrently "command1 arg" "command2 arg"
```

É importante colocar os comandos dentro de aspas duplas pq se não colocarmos seriam executados 4 comandos: `command1`, `arg`, `command2` e `arg`.

Podemos então configurar esse comando dentro do nosso _package.json_:

```js
{
	"start": "concurrently \"command1 arg\" \"command2 arg\""
}
```

Quando o comando que quisermos executar for um comando npm nós podemos usar flag _-n_:

```js
concurrently -n watch-js,watch-css,watch-nod
```

Isso seria equivalente a:

```js
concurrently "npm run watch-js" "npm run watch-css" "npm run watch-node"
```

Além disso, podemos também executar vários comandos que comecem com um mesmo prefixo:

```js
{
  ...
  "scripts": {
      "watch-js": "...",
      "watch-css": "...",
      "watch-node": "...",
  },
  ...
}
```

Pra rodar todos esses scripts podemos simplesmente rodar:

```js
concurrently -n "watch-*"
```

---

É importante ganharmos tempo no nosso dia a dia, e rodando alguns scripts paralelamente é uma maneira simples de fazermos isso, então se você tem algum projeto que leva muito tempo pra rodar alguns comandos, talvez valha a pena estudar se essa solução se encaixa pro seu caso!

Você pode ver esses exemplos e mais alguns nessa página do pacote: [NPM concurrently](https://www.npmjs.com/package/concurrently)
