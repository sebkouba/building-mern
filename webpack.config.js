var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

// copies index.html from /app to /dist like bundle.js
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // where does our app "start"
  //entry: [
  //  './app/index.js'
  //],
  entry: [
   'webpack-dev-server/client?http://0.0.0.0:3001',
   'webpack/hot/only-dev-server',
   './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["es2015", "react", "react-hmre", "stage-2", "stage-0"]
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
