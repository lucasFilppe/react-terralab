# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `o que react?`

É uma bibioteca para criação de interface

### `componentes`

Os componentes são bits de código independentes e reutilizáveis. Eles servem ao mesmo propósito que as funções JavaScript, mas trabalham isoladamente e retornam HTML.

### `propriedades`

Assim como no html, podemos passar propreiedades nas notações de nossos componentes. São valores passados para componentes

### `rederinzar`

Ato de um componente ser exibido em tela tela

### `imutabilidade` 

Na programação, é um conceito, onde diz que, uma vez que um dado foi instanciado, ele não pode ter seus estados internos modificados.O operador spread é muito útil quando você deseja fazer uma cópia exata de um array existente, você pode usar o operador spread(...) para fazer isso rapidamente.

### `estado e hooks`

#### useSate

Inicializamos nosso estado chamando useState nosso componente de função. useState aceita um estado inicial e retorna dois valores:

- O estado atual. 
- Uma função que atualiza o estado. Exemplo de uso [useState](https://www.w3schools.com/react/react_usestate.asp)

#### useEffect

Serve para lidar com efeitos. é executado em cada renderização. Isso significa que, quando a contagem muda, ocorre uma renderização, que aciona outro efeito. Exemplo de uso [useEffect](https://www.youtube.com/watch?v=jcc9T-5inrk)

### `typescript`

TypeScript mantém uma relação incomum com o JavaScript, ou seja, oferece todos os recursos do JavaScript e uma camada adicional sobre eles: o sistema de tipos TypeScript. Exemplo de uso[typescript](https://www.alura.com.br/artigos/javascript-ou-typescript?gclid=Cj0KCQiA3eGfBhCeARIsACpJNU8rnL_QH_6l4B8JptwpTgltMAbKO-kcWpHjnRKxlNqOXw0RqNLp260aAq5aEALw_wcB)

- yarn add typescript -D : instalação
- yarn tsc --init : iniciará o typescript na aplicação
- yarn add @types/react-dom -D

### `react dev tools`

Ferramente de extensão do google para debugar aplicações react. Exemplo de uso: [react dev tools](https://www.google.com/search?q=react+developer+tools&client=ubuntu&hs=B6m&source=lnms&tbm=vid&sa=X&ved=2ahUKEwj7pNnlvK_9AhV_Q7gEHa7YBLYQ_AUoAXoECAEQAw&biw=1305&bih=636&dpr=1#fpstate=ive&vld=cid:aea867e6,vid:rb1GWqCJid4)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




