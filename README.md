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