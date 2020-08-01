const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main.js'
    },

    output: {
        path: path.resolve(__dirname, '../docs'),
        publicPath: './',
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Layout 文档',
            template: path.resolve(__dirname, '../examples/index.html')
        })
    ]
});
