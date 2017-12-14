const webpack = require('webpack');
const path = require('path');

const package = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${package.name}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${package.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
};

module.exports = config;