---
title: Criando atalhos para os comandos do git
description: A vida é curta demais pra ficar digitando comandos longos ⌨️
date: "2021-09-27T00:00:00.121Z"
cover_image: https://images.unsplash.com/photo-1511075675422-c8e008f749d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874
credit_image: Foto tirada por Stefan Steinbauer
credit_image_author: https://unsplash.com/@usinglight
---

Tem muitos comandos do git que são difíceis de lembrar de cabeça e pra não precisar ficar buscando toda vez como fazer aquele comando que você quase nunca usa você pode criar atalhos no git, e o melhor é que essa criação é super simples.

Pra criar um atalho é só utilizar o comando:

```bash
git config --global alias.co checkout
```

Com esse comando estamos configurando um atalho global, esse atalho é o `co` e ele representa o comando `checkout`. Depois de configurar esse atalho pra trocar de branch ao invés de rodar um:

```bash
git checkout main
```

Podemos usar:

```bash
git co main
```

Pra configurar qualquer atalho é só seguir essa estrutura:

- **git**: pra indicar que um comando git será executado
- **config**: pra indicar que esse é um comando de configuração
- **--global**: flag que indica que o comando vai ser executado de maneira global e não apenas local, se não adicionarmos essa flag o atalho criado será configurado apenas pro repositório onde o comando foi executado
- **alias.[atalho]**: argumento onde é definido o nome do novo atalho
- **checkout**: como no exemplo eu tava criando um atalho pro comando `checkout` ele precisa aparecer aqui, então o último argumento é o comando que vai ser relacionado ao atalho

O comando que eu usei no exemplo é super simples, tem comando muito mais complicado e que acabamos não utilizando no dia a dia e são pra esses comandos que os atalhos são mais úteis. Alguns atalhos que eu tenho configurado:

### Deletar uma branch do repositório remoto

```bash
git config --global alias.delRemote "push origin --delete"
```

Comando com atalho: `git delRemote [nome da branch]`  
Comando original: `git push origin --delete [nome da branch]`

### Deletar uma branch do repositório local

```bash
git config --global alias.delLocal "branch -d"
```

Comando com atalho: `git delLocal [nome da branch]`  
Comando original: `git branch -d [nome da branch]`

### Fazer um push pra criar uma nova branch remotamente

```bash
git config --global alias.pushNewB "push --set-upstream origin"
```

Comando com atalho: `git pushNewB [nome da branch]`  
Comando original: `git push --set-upstream origin [nome da branch]`

### Ver o último commit

```bash
git config --global alias.last "log -1 HEAD"
```

Comando com atalho: `git last`  
Comando original: `git log -1 HEAD`

### Listar os atalhos configurados

```bash
git config --global alias.alias "config --get-regexp alias"
```

Comando com atalho: `git alias`  
Comando original: `git config --get-regexp alias`

---

Pra deletar um atalho é só utilizar esse comando:

```bash
git config --global --unset alias.co
```

Esse comando remove um atalho global, pra remover um atalho local é só remover o argumento `--global`:

```bash
git config --unset alias.co
```
