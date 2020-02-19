const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/../src/index.js',
  module: {
    rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
		minimize: false
	},
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'MyApp',
      filename: 'index.html',
      template: __dirname + '/../views/index.html'
    })
  ]
};