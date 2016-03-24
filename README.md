# Building Mern
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
