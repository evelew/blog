---
title: Como eu organizo meu CSS
description: A ideia nesse post é compartilhar como eu costumo organizar arquivos de estilo
date: "2021-05-31T00:00:00.121Z"
---

Esses dias me perguntaram como eu organizo meus arquivos de CSS e eu achei que seria legal postar aqui. Num primeiro momento eu achei que esse seria um post meio chato de fazer mas no final esse foi um dos textos que mais gostei de escrever.

Vou comentar sobre 3 pontos que eu organizo quando eu escrevo arquivos CSS:

- Ordem das propriedades
- Ordem dos seletores
- Nomes de classes

---

# Ordem das propriedades

Eu organizo as propriedades por ordem alfabética, isso começou como um ~~toque~~ mas depois eu comecei a ver vantagens reais.

Digamos que você precisa trocar o tamanho da fonte nesse seletor abaixo:

```css
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  font-size: 10px;
  background-color: white;
  border-radius: 4px;
  font-weight: bold;
  color: green;
}
```

Foi fácil de encontrar a propriedade font-size? E se tivesse um jeito mais fácil?

```css
.card {
  align-items: center;
  background-color: white;
  border-radius: 4px;
  color: green;
  display: flex;
  font-size: 10px;
  font-weight: bold;
  height: 200px;
  justify-content: center;
  width: 100%;
}
```

Sabendo que as propriedades estão em ordem alfabética fica mais fácil de encontrar a propriedade que eu procuro no meio de tantas outras.

No começo é meio chato de fazer isso, mas com o tempo acaba ficando meio natural. Existem algumas extensões que fazem isso automaticamente, mas confesso que nunca cheguei a usar uma que funcionasse bem.

\*Eu já comecei a desenvolver uma extesão pro VSCode e estava funcionando bem pra arquivos .css, mas na hora de adaptar essa extensão pensando em pré-processadores de css deu muita dor de cabeça e eu acabei desistindo. 😅

# Ordem dos seletores

Na hora de organizar os seletores eu prefiro SEMPRE seguir a ordem do HTML. Como assim? Simples, olha esse HTML abaixo:

```html
<section class="blog">
  <h1 class="blog-title">título</h1>

  <div class="card">
    <img
      class="card-image"
      src="doguinho-caramelo.png"
      alt="Foto de um doguinho"
    />
    <h2 class="card-title">dog caramelo</h2>
    <p class="card-introduction">
      qualquer comentário sobre o doguinho caramelo
    </p>
  </div>
</section>
```

Essa estrutura HTML tem uma ordem:

1. section → .blog
2. h1 → .blog-title
3. div → .card
4. img → .card-image
5. h2 → .card-title
6. p → .card-introduction

Então o meu CSS reflete essa ordem:

```css
.blog {}

.blog-title {}

.card {}

.card-image {}

.card-title {}

.card-introduction {}
```

Isso facilita bastante na hora de encontrar um seletor, se eu preciso alterar o título do card, eu consigo ter uma noção de onde +- ele vai estar quando vou "andando" pelo arquivo.

"Ah Evellyn mas é só dar um CTRL+F pô!!"

Verdade, o CTRL+F resolve. Mas esquecendo essa parte de procurar pelo seletor e pensando apenas na organização do CSS, faz sentido né?

É muito melhor seguir uma ordem clara do que, por exemplo, colocar o .card-title como último item no arquivo de CSS e o .card-image como primeiro.

"Ta bom, blz. E quando eu precisar adicionar um novo item no HTML?"

AÍ é só você continuar seguindo a mesma regra, olha só:

```html
<section class="blog">
  <h1 class="blog-title">título</h1>

  <div class="card">
    <img
      class="card-image"
      src="doguinho-caramelo.png"
      alt="Foto de um doguinho"
    />
    <span class="card-tag">#dog</span> // NOVO ELEMENTO
    <h2 class="card-title">dog caramelo</h2>
    <p class="card-introduction">
      qualquer comentário sobre o doguinho caramelo
    </p>
  </div>
</section>
```

E então o CSS fica assim:

```css
.blog {}

.blog-title {}

.card {}

.card-image {}

.card-tag {} // NOVO SELETOR

.card-title {}

.card-introduction {}
```

# Nomes de classes

Esse é um assunto complicado, eu não tenho nenhuma preferência muito forte ainda, no exemplo acima eu nomeei os elementos filhos com um - (traço), mas nos meus projetos pessoais eu costumo criar as classes assim:

```css
.blog {}

.blog__title {}

.card {}

.card__image {}
```

E assim por diante, quando uma classe define o status do elemento ela fica assim:

```css
.card—-error {}
```

Eu não gosto muito desse estilo com underscore/underline `__` pq as classes ficam grandes muito rápido.

Então esse é um ponto que ainda preciso estudar e encontrar um estilo que faça sentido pra mim.

\*E claro, falando dos projetos que participo no trabalho: eu sigo as regras definidas pelo time.

---

Se você gostou ou achou alguma parte interessante compartilha com seus colegas/amigos.

Se você tem algum comentário ou sugestão pode me mandar uma mensagem no twitter: [@eveleww](https://twitter.com/eveleww)

Tô aceitando sugestões de como padronizar minhas classes!!
