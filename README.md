# React Component Library

Este é um projeto desenvolvido durante o curso "React: desenvolvendo uma biblioteca de componentes" da Alura. (8 horas, Concluído)

Durante o curso, foram abordados os seguintes tópicos:
- Utilização do React para criação de uma biblioteca de componentes.
- Produção de um pacote NPM utilizando o TSDX.
- Estratégias de publicação dos componentes.
- Publicação do pacote no npm.
- Versionamento do projeto com `auto` e GitHub Actions.
- Implementação de componentes utilizando `styled-components`.
- Prototipação de uma aplicação usando a biblioteca criada.

## Como clonar o projeto

Siga as etapas abaixo para clonar este repositório:

1. Certifique-se de ter o [Git](https://git-scm.com/) instalado.
3. Abra o terminal e navegue até o diretório onde deseja armazenar o projeto.
3. Execute o seguinte comando no terminal para clonar o repositório:

```bash
git clone https://github.com/MakenRosa/mkn-books-ds.git
```

4. Após clonar o repositório, navegue até o diretório do projeto e verifique se o mesmo foi clonado com sucesso.

```bash
cd mkn-books-ds
ls
```

## Como executar o projeto

Para executar o projeto, execute o seguinte comando no terminal:

1. Certifique-se de estar no diretório raiz do projeto.
2. Execute o comando abaixo para instalar as dependências do projeto:

```bash
yarn install
```

3. Após instalar as dependências, execute o comando abaixo para iniciar o Storybook:

```bash
yarn storybook
```

## Estrutura do projeto

A estrutura básica do projeto é a seguinte:

```mkn-books-ds
├── .github/workflows/
│   └── push.yaml
├── .storybook/
│   ├── main.js
│   └── preview.js
├── example/
│   ├── .npmignore
│   ├── index.html
│   ├── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── yarn.lock
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   └── index.tsx
│   │   ├── Card/
│   │   │   └── index.tsx
│   │   ├── InputQuantity/
│   │   │   └── index.tsx
│   │   ├── OptionsGroup/
│   │   │   └── index.tsx
│   │   ├── Tag/
│   │   │   └── index.tsx
│   │   └── TextField/
│   │       └── index.tsx
│   └── index.tsx
├── stories/
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   ├── InputQuantity.stories.tsx
│   ├── OptionsGroup.stories.tsx
│   ├── Tag.stories.tsx
│   └── TextField.stories.tsx
├── .gitignore
├── CHANGELOG.md
├── package.json
├── tsconfig.json
└── yarn.lock
```

- O diretório `.github/workflows/` contém a configuração do GitHub Actions.
- O diretório `.storybook/` possui as configurações do Storybook.
- O diretório `example/` contém um exemplo de aplicação utilizando os componentes da biblioteca.
- O diretório `src/components/` contém todos os componentes desenvolvidos.
- O diretório `stories/` contém as histórias do Storybook para cada componente.
- Arquivos como `.gitignore`, `CHANGELOG.md`, `package.json`, `tsconfig.json` e `yarn.lock` são arquivos de configuração e documentação do projeto.

## Como usar a biblioteca no seu projeto

Para utilizar a biblioteca, você pode instalá-la via npm ou yarn, e importar os componentes necessários em seu projeto React.

### Instalação

Para instalar a biblioteca, execute o seguinte comando no terminal:

```bash
npm install mkn-books-ds
```

ou

```bash
yarn add mkn-books-ds
```

### Importação

Para importar os componentes, utilize o seguinte comando:

```javascript
import { Button } from 'mkn-books-ds';
```

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/MakenRosa/mkn-books-ds/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.