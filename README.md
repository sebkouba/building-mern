# Building MERN
I will go through the steps of building a simple Express server that can be used
to build React applications with MongoDB. Ech branch should represent one step
in the process.

### 01 Express Server - Hello World
| Command | Result |
| --- | --- |
|`npm ini -y` | create npm module with default values |
|`npm i -S express` | npm install Express (-S => saved as dependency in `package.json`)|

#### Files
##### server.js
Creates Express server on port 3000
##### package.json
npm definition of the package. Stores dependencies and defines `npm start` and other commands.

### 02 Nodemon
`npm i -D nodemon` => install nodemon stored as dev dependency.

nodemon monitors files for changes to automatically restart the server. Running `npm start` now runs `nodemon`
so the server automatically restarts when changes are made to `server.js`.
Running `nodemon` directly has the same effect.
#### Files
##### nodemon.json
Specifies files to watch and command to run.
##### .editorconfig
File I stole that helps with code style

### 03 Webpack & Babel
This is where it gets complicated, especially because of hot reloading.
Webpack bundles all the JS files and Babel transpiles JSX and ES6 to ES5.

A WebpackDevServer is introduced to handle the hot reloading, which is running on port 3001.
This server only handles the "hotness" and sends all requests on to the original
Express server (somebody please correct me on this). Hot reloading now works on
localhost:3001

##### Dev dependencies
`npm i -D babel-core babel-loader babel-preset-react babel-preset-react-hmre babel-preset-es2015 html-webpack-plugin webpack webpack-dev-server webpack-dev-middleware`

##### Install React
`npm i -S react react-dom`

| Package                 | Description |
| ---                     | ---         |
| webpack                 | Module Bundler turning "code puzzle pieces" an actual application |
| webpack-dev-server      | webpack server on top of express |
| webpack-dev-middleware  | Serves files from memory over connect server |
| html-webpack-plugin     | Copies index.html file to dist directory |
| babel-core              | Transpiles code |
| babel-loader            | Allows specific loaders to be included |
| babel-preset-react      | Provides react loader |
| babel-preset-es2015     | ES6 / ES 2015 loader |
| babel-preset-react-hmre | Preset for react hot reloading |


## Resources
[Hot Reload on top of Express](http://ctheu.com/2015/05/14/using-react-hot-loader-with-a-webpack-dev-server-and-a-node-server/)
