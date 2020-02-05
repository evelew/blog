---
title: Manipulando o tempo com Jest
description: Aprenda como viajar no tempo &#9203
date: "2020-02-05T00:00:00.121Z"
---

As vezes nós precisamos testar um comportamento que depende de um timer
(setTimeout, setInterval, clearTimeout, clearInterval), o problema é que esses métodos
não são bons de serem testados porque dependem do tempo real para acontecerem,
ainda bem que o Jest disponibiliza funções para controlar a passagem do tempo.

Eu vou mostrar dois exemplos de como utilizar os fake timers do jest,
o primeiro utilizando setTimeout e o segundo utilizando setInterval.

Esse é o código que utiliza o método setTimeout:

```js
export function Timeout({ time }) {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(false)
    }, time)
  }, [])

  return <>{showFirst ? <p>Primeiro item</p> : <p>Segundo item</p>}</>
}
```

Esse trecho de código mostra, em um primeiro momento, um parágrafo com o texto "Primeiro item" e após um período de tempo (passado por props) mostrará o texto "Segundo item".

O teste desse código fica assim:

```js
import React from "react"
import { act } from "react-dom/test-utils"
import { render, waitForElement } from "@testing-library/react"

import Timeout from "./"

/*
Para conseguir manipular o tempo dentro dos testes precisamos avisar 
ao Jest que vamos utilizar os fake timers
*/
jest.useFakeTimers()

test("Texto deve mudar após 5 segundos", async () => {
  // Renderizamos o componente passando o valor de 5 segundos por props
  const { getByText } = render(<Timeout time={5000} />)

  getByText("Primeiro item")

  act(() => {
    /*
    Com o método "advanceTimersByTime" o Jest avança todos timers 
    com o tempo (milisegundos) definido
    */
    jest.advanceTimersByTime(5000)
  })

  /*
  Como avançamos o timer em 5 segundos e o segundo item apareceria após 
  5 segundos aqui ele já está presente na tela
  */
  getByText("Segundo item")
})
```

O segundo exemplo a ser testado utiliza o método "setInterval". Nós temos 3 items, a cada X tempo (passado por props) um item fica ativo, quando o último item é o ativo e é o momento de mudar de item, tornamos o primeiro item ativo novamente:

(Obs: o código poderia ser escrito de uma maneira melhor/diferente, mas eu preferi deixar ele dessa maneira porque acredito que fica mais simples de ser entendido.)

```js
export function Timeout({ time }) {
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    updateCurrent()
  }, [activeItem])

  const updateCurrent = () => {
    setInterval(() => {
      const c = activeItem === 2 ? 0 : activeItem + 1
      setActiveItem(c)
    }, time)
  }

  return (
    <>
      <div
        data-testid="item"
        className={activeItem === 0 ? "item active" : "item"}
      >
        item 1
      </div>
      <div
        data-testid="item"
        className={activeItem === 1 ? "item active" : "item"}
      >
        item 2
      </div>
      <div
        data-testid="item"
        className={activeItem === 2 ? "item active" : "item"}
      >
        item 3
      </div>
    </>
  )
}
```

O teste do código acima fica assim:

```js
import React from "react"
import { act } from "react-dom/test-utils"
import { render } from "@testing-library/react"

import Timeout from "./"

// Avisamos ao Jest que vamos utilizar timers falsos
jest.useFakeTimers()

describe("teste time out", () => {
  it("deve marcar item como active corretamente", async () => {
    // Renderizamos o componente passando o valor de 3 segundos por props
    const { getAllByTestId } = render(<Timeout time={3000} />)

    // Pegamos todos os items com o ID "item"
    const items = getAllByTestId("item")

    // Validamos que os 3 items estão na tela
    expect(items).toHaveLength(3)

    // Inicia com o primeiro item ativo
    expect(items[0]).toHaveClass("active") // Item ativo
    expect(items[1]).not.toHaveClass("active")
    expect(items[2]).not.toHaveClass("active")

    act(() => {
      // Avança 3 segundos no tempo
      jest.advanceTimersByTime(3000)
    })

    /*
    Após avançar 3 segundos o método dentro do setInterval é chamado 
    novamente, o segundo item é o ativo agora
    */
    expect(items[0]).not.toHaveClass("active")
    expect(items[1]).toHaveClass("active") // Item ativo
    expect(items[2]).not.toHaveClass("active")

    act(() => {
      // Avança 3 segundos no tempo
      jest.advanceTimersByTime(3000)
    })

    /*
    O método dentro do setInterval é chamado novamente e o terceiro 
    item é o ativo agora
    */
    expect(items[0]).not.toHaveClass("active")
    expect(items[1]).not.toHaveClass("active")
    expect(items[2]).toHaveClass("active") // Item ativo

    act(() => {
      // Avança 3 segundos no tempo
      jest.advanceTimersByTime(3000)
    })

    /*
    O método dentro do setInterval é chamado novamente, agora o 
    primeiro item deve estar ativo novamente
    */
    expect(items[0]).toHaveClass("active")
    expect(items[1]).not.toHaveClass("active")
    expect(items[2]).not.toHaveClass("active")
  })
})
```

O Jest disponibiliza outros métodos para facilitar os testes que envolvem timers, você pode ler sobre eles [aqui](https://jestjs.io/docs/en/timer-mocks).