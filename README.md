# Webpack config for React

> This repo is already configured for ReactJS library. Supports preprocessor CSS languages:
SASS, LESS, and STYLUS. Contains developer dev server that hard reloads, all necessary packages, 
and HTML preprocessors like EJS, PUG, and Handlebars. 

## Dependencies
* [GIT](https://git-scm.com/downloads) 
* [Node JS](https://nodejs.org/en/download/current/)
* NPM (Node JS includes NPM)

## Install
In your terminal type following commands:

```bash
git clone https://github.com/DudkinON/webpack-react
cd webpack-react
```

then you need install packages:

##### Install with NPM
```bash
npm install
```
##### Install with NPM
```bash
yarn install 
```

## Run

Next, build the project with following command:
```
npm run build
```
then, run server:

```
npm run server
```

server will run on [http://127.0.0.1:3000](http://127.0.0.1:3000)

> Node: by default server uses port 3000, make sure that this port is free

After server is running you will see:

[![demo](https://github.com/DudkinON/webpack-react/blob/master/demo.jpg?raw=true)](https://github.com/DudkinON/webpack-react/blob/master/demo.jpg?raw=true)

## HTML preprocessors

This part discusses how to use HTML preprocessors

Open `config/webpack.dev.config.js` file and find:

```
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/html/index.html",
      title: "Webpack: React configuration"
    })
  ]
```

##### PUG preprocessor
change `index.html` to `index.pug`

##### EJS preprocessor
change `index.html` to `index.ejs`

##### Handlebars preprocessor
change `index.html` to `index.hbs`

Then you can open `src/html/index.[ejs|hbs|pug]` file and use your favorite preprocessor

## CSS preprocessors

This part discusses how to use CSS preprocessors

Open `src/js/main.js` and find: 
```javascript
require("../styles/main.css");
```

##### LESS preprocessor
then change `main.css` to `main.less`

##### SASS preprocessor
then change `main.css` to `main.sass`

##### Stylus preprocessor
then change `main.css` to `main.styl`

Open file `src/styles/main.[less|sass|styl]` and work with your favorite CSS preprocessor

## React 

React app files located in `src/js/app`. The `main.js` is the entry point for React app, the `app.js` is a react 
component. You can build your react app with any architecture.

## License

This repo sharing under [MIT](LICENSE) license
