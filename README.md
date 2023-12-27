comandos para criaçao de atalhos alias para o git

```bash
## comando git config list mostra todas as configuracoes do git disponíveis na máquina
$ git config --list
```

## exitem três níveis de configurações do git possíveis de alteração

```bash
## configuração do git para toda a máquina, ou seja, para qualquer projeto e qualquer usuário naquele sistema
$ git config --system
## configuração do seu usuário para qualquer projeto
$ git config --global
## configurações apenas de um projeto específico
$ git config --local
## obs: para editar com o terminal padrão utiliza-se a flag --edit. Porém para escolher um terminal ou editor de sua preferência
## utiliza-se o comando
$ git config --global code.editor code ## para essa opção foi escolhido o VS Code como editor
```

## criando alias para comando

```bash
## terminal git config
[credential]
    helper = <any_credentials>
[user]
    name = <user_name>
    email = <user_email>
[push]
    followTags = true
[core]
    editor = code --wait ## a flag --wait auxilia o vs code a esperar todos os comandos do git carregarem
[alias] ## criamos os alias aqui
    s = !git status -s ## git s (chama git status) Ex: M test.js  (M - Modified)
    add = !git add ## git add (chama git add)
```
## padrões utilizados no projeto
- conventional commits
- typescript & types