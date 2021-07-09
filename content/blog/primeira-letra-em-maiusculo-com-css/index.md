---
title: Primeira letra em maiúsculo com CSS
description: Substituindo o método toUpperCase por um pseudo-elemento do CSS
date: "2021-06-28T00:00:00.121Z"
---

É comum olharmos arquivos de javascript e acabarmos encontrando um `toUpperCase()` no meio do código sendo usado pra deixar um texto em maiúsculo, e algumas vezes, pra deixar só a primeira letra de uma frase em maiúsculo.

Isso funciona? Funciona. É o ideal? Acredito que não. Nesses casos estamos usando JS pra controlar o estilo de alguma parte da nossa tela, e nesse caso o que a gente deve priorizar é a utilização do CSS.

E, não por acaso, apenas com CSS conseguimos definir a primeira letra como maiúscula.

Pra resolver isso precisamos usar o pseudo-elemento `::first-letter`.

Pra exemplificar vamos usar esse trecho de HTML:

```html
<p class="message">evellyn, seu endereço foi alterado.</p>
```

Temos um parágrafo com a classe `message` e com o texto "evellyn, seu endereço foi alterado.", o ideal é o meu nome aparecer com a primeira letra em maiúsculo, com CSS conseguimos fazer isso da seguinte maneira:

```css
.message::first-letter {
  text-transform: uppercase;
}
```

Com isso alteramos o estilo apenas a primeira letra do seletor `.message`, assim a frase vai aparecer do jeito esperado na tela: "Evellyn, seu endereço foi alterado."

---

Com o JS conseguimos fazer muitas coisas mas nem sempre ele é a ferramenta certa pra fazermos tudo, por isso é importante sempre pesquisarmos se com CSS não conseguimos fazer aquela mudança visual na nossa página.

Você pode ver mais detalhes sobre esse pseudo-elemento na [documentação da MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter).
