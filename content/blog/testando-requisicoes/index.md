---
title: Testando a resposta de uma requisição
description: Como testar os diferentes cenários ao redor de uma requisição
date: "2019-11-20T23:00:00.121Z"
---

Nesse texto eu vou mostrar como simular a resposta de uma requisição, com exemplos de erro e de sucesso. Os testes foram escritos utilizando a biblioteca [@testing-library/react](https://github.com/testing-library/react-testing-library).

O trecho de código abaixo é o que será testado:

```js
try {
  // username e password são preenchidos por inputs
  const { isAdmin } = await login({ username, password })

  // Se a requisição retornar isAdmin como true mandamos o cliente para a rota "/admin"
  if (isAdmin) {
    return history.push('/admin')
  }

  // Se a requisição retornar isAdmin como false mandamos o cliente para a rota "/home"
  return history.push('/home')
} catch (error) {
  // Caso a requisição retorne um erro esperamos um objeto que tenha o status code do erro
  const { code } = error.response;

  // Se o status code do erro for 403 significa que os dados preenchidos não são válidos
  if (code === 403) {
    return setErrorMessage('dados inválidos')
  }

  // Qualquer outro status code retornado vai mostrar uma mensagem de erro no servidor
  return setErrorMessage('erro no servidor')
}
```

Nesse exemplo o usuário deve preencher o `usuário` e a `senha`, e ao clicar em "entrar" nós temos alguns cenários possíveis:

__1 -__ Pode ocorrer um erro no servidor e então mostramos a mensagem "erro no servidor"

__2 -__ Os dados passados são inválidos (status code 403) e mostramos a mensagem "dados inválidos"

__3 -__ O usuário e senha estão corretos e o cliente é redirecionado para a rota "/home"

__4 -__ O usuário está correto e tem perfil de `admin`, então é redirecionado para a rota "/admin"

Primeiro precisamos mockar o arquivo que tem a requisição: 

```js
jest.mock('../api')
```

Para simular a requisição precisamos utilizar o método `mockImplementation`, e dentro dele retornar uma `Promise` com a resposta que queremos testar. Abaixo temos um exemplo de uma respota de erro, dentro de `mockImplementation` temos uma `Promise.reject` que retorna um objeto com o código de erro 500:

```js
// "login" é a função importada do arquivo "api"
login.mockImplementation(() => Promise.reject({
  response: {
    code: 500
  }
}))
```

E então para simular o primeiro cenário, que deve mostrar uma mensagem de "erro no servidor" na tela, precisamos de um mock igual ao do exemplo acima:

```js
it('deve renderizar mensagem de erro do servidor', async () => {
  login.mockImplementation(() => Promise.reject({
    response: {
      code: 500
    }
  }))

  const { getByText } = render(<Component />)

  // Disparamos um evento de clique no botão com o texto "entrar"
  act(() => {
    fireEvent.click(getByText('entrar'))
  })

  // Validamos que o método "login" foi chamado
  expect(login).toBeCalled()

  // Validamos se a mensagem de erro apareceu na tela
  await wait(() => {
    expect(getByText('erro no servidor'))
  })
})
```

Para simular o segundo cenário precisamos de um mock que retorne um erro com o status code `403` pois é o que validamos para mostrar a mensagem de dados inválidos.

```js
it('deve renderizar mensagem de erro de login', async () => {
    login.mockImplementation(() => Promise.reject({
    response: {
      code: 403
    }
  }))

  const { getByText } = render(<Component />)

  // Disparamos um evento de clique no botão com o texto "entrar"
  act(() => {
    fireEvent.click(getByText('entrar'))
  })

  // Validamos que o método "login" foi chamado
  expect(login).toBeCalled()

  // Validamos se a mensagem de erro apareceu na tela
  await wait(() => {
    expect(getByText('dados inválidos'))
  })
})
```

Para simular o terceiro cenário devemos ter um mock retornando uma `Promise.resolve`, pois nesse caso deu tudo certo com a requisição, e como resposta precisamos de um objeto com `isAdmin` como `false` pois nesse cenário o usuário não é admin.

```js
it('deve preencher os dados e ser redirecionado para tela de admin', async () => {
  login.mockImplementation(() => Promise.resolve({
    isAdmin: false
  }))

  const { getByText, getByLabelText } = render(<Component />)

  // Pegamos os inputs pelo texto da label
  const username = getByLabelText('username')
  const pasword = getByLabelText('password')

  // Preenchemos os inputs
  fireEvent.change(username, { target: { value: 'evellynlima' } })
  fireEvent.change(pasword, { target: { value: 'senha123' } })

  // Disparamos um evento de clique no botão com o texto "entrar"
  act(() => {
    fireEvent.click(getByText('entrar'))
  })

  // Validamos se o método "login" foi chamado com os dados que preenchemos
  expect(login).toBeCalledWith({
    username: 'evellynlima',
    password: 'senha123'
  })

  // Validamos que o usuário foi redirecionado para a rota "/home"
  await wait(() => {
    expect(history.push).toBeCalledWith('/home')
  })
})
```

E para simular o último cenário devemos fazer algo parecido com o mock anterior mas dentro do objeto retornamos a chave `isAdmin` como `true`, para que o usuário seja redirecionado para a rota "/admin".

```js
it('deve preencher os dados e ser redirecionado para a home', async () => {
  login.mockImplementation(() => Promise.resolve({
    isAdmin: true
  }))

  const { getByText, getByLabelText } = render(<Component />)

  // Pegamos os inputs pelo texto da label
  const username = getByLabelText('username')
  const pasword = getByLabelText('password')

  // Preenchemos os inputs
  fireEvent.change(username, { target: { value: 'evellynlima2' } })
  fireEvent.change(pasword, { target: { value: '123senha' } })

  // Disparamos um evento de clique no botão com o texto "entrar"
  act(() => {
    fireEvent.click(getByText('entrar'))
  })

  // Validamos que o método "login" foi chamado com os dados que preenchemos
  expect(login).toBeCalledWith({
    username: 'evellynlima2',
    password: '123senha'
  })

  // Validamos que o usuário foi redirecionado para a rota "/admin"
  await wait(() => {
    expect(history.push).toBeCalledWith('/admin')
  })
})
```

É isto. Eu acho que esse é o tipo de teste que eu tenho achado mais divertido pq eu acho maneiro mockar erros ¯\\_(ツ)_/¯.