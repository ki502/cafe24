const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    name: 'web',
    entry: [ __dirname + '/../src/index.js' ],
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(png|jpg)$/, loader: 'file-loader', options: {
                name: '/image/[name].png'
            }}
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
}, {
    name: 'mobile',
    entry: {
        main: __dirname + '/../src/index.js',
        index: __dirname + '/../mobile.js'
    },
    output: {
        path: __dirname + '/../mobile/www/js',
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(png|jpg)$/, loader: 'file-loader', options: {
                name: '../img/[name].png'
            }}
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
            filename: __dirname + '/../mobile/www/index.html',
            template: __dirname + '/../views/index.html'
        })
    ]
}];