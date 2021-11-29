<div align="center">
  <img alt="Letmeask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="160px">
  <h1>React Custom Hooks</h1>
</div>

<br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/vinimedeiros13/React-custom-hooks/
$ cd React-custom-hooks
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000.


## 💻 Projeto
A finalidade deste projeto é a criação de componentes React(hooks, contexts, funções etc.)
que visem facilitar e automatizar funcionalidades durante o desenvolvimento.

### Componentes desenvolvidos:
#### Contexts 🌐
- [Theme Context](./context/ThemeContext.tsx): Auxilia na implementação de temas, como dark e light mode. (Utiliza o hook [usePersistedState](./hooks/usePersistedState.ts))

#### Hooks 🪝
- [useButton](./hooks/useButton.ts): Fornece funções e states que facilitam gerenciamento do comportamento de botões.
- [useModal](./hooks/useModal.ts): Disponibiliza funções e states para facilitar o gerenciamento de modais.
- [usePersistedState](./hooks/usePersistedState.ts): Fornece um state com o tema atual da aplicação (salvo no storage ou não) e uma função para troca de tema.
- [useStorage](./hooks/useStorage.ts): Retorna funções que facilitam a manipulação do storage do navegador.
- [useWindowDimensions](./hooks/useWindowDimensions.ts): Retorna as dimensções atuais da tela.


<!-- ## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes. -->

---

Feito com 💜 by [Vinicius](https://github.com/vinimedeiros13) e [João Victor](https://github.com/joaovictornsv) 👋🏻