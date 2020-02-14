const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};