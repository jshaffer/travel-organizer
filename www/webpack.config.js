var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/index.jsx',
    output: { path: __dirname, filename: './js/bundle.js' },
    resolve: {
        extensions: ["", ".webpack.js", ".js", ".jsx", ".json"]
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: "source-map"
};