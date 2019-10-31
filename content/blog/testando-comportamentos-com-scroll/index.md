---
title: Testando comportamentos com scroll
description: Testando comportamentos com scroll
date: "2019-10-30T23:46:37.121Z"
---

Esses dias eu precisava testar o comportamento de um componente que dependia de um evento de scroll e acabei me batendo muito, por isso resolvi escrever esse post, pra ajudar quem está passando por isso e muito provavelmente vou acabar ajudando a Evellyn do futuro também porque eu devo esquecer dessa solução.

Imagine que o componente tem o seguinte comportamento: quando é feito um scroll no documento aparece um botão "avançar".

## GIF 01

Para testarmos se o botão vai aparecer na tela temos que simular um scroll, para simular o scroll precisamos fazer o seguinte:

```javascript
window.dispatchEvent(new window.UIEvent('scroll'))
```

Então o teste fica assim:

```javascript
// Renderizar o componente
const { getByText, queryByText } = render(<ScrollDocument />)

// Valida que o botão "AVANÇAR" não está presente na tela
expect(queryByText(/AVANÇAR/)).not.toBeInTheDocument()

// Simula o evento de scroll
act(() => {
  window.dispatchEvent(new window.UIEvent('scroll'))
})

// Valida que o botão "AVANÇAR" apareceu na tela
expect(getByText(/AVANÇAR/))
```

Esse teste só vai funcionar se o scroll for o scroll natural do documento, para testar um evento de scroll em uma tag HTML devemos simular o evento diretamente na tag. Então imagine o mesmo comportamento anterior, o botão "avançar" aparece após um evento de scroll, mas dessa vez o scroll precisa ser feito em uma `DIV`.

## GIF 02

O teste fica assim:

```javascript
// Aqui pegamos a div por data-testid
const wrapper = getByTestId('scroller-container')

// E aqui simulamos o evento de scroll diretamente na DIV
wrapper.dispatchEvent(new window.UIEvent('scroll'))
```

Se alguém tiver outra maneira de testar esse comportamento pode falar comigo no [twitter](https://twitter.com/eveleww) ou abrir uma issue nesse [repositório]().

OBS: Os exemplos de testes demonstrados nesse artigo foram escritos com a biblioteca [@testing-library/react](https://github.com/testing-library/react-testing-library).