const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

const srcDir = path.resolve(__dirname, 'src');

const config = {
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [srcDir, 'node_modules'],
    },
    entry: {
        app: [
          './src/main'
        ]
    },
    plugins: [
        new AureliaPlugin({}),
        new ModuleDependenciesPlugin({}),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            _: "underscore",
            Mustache: "mustache",
            Marionette: "backbone.marionette",
        }),
        new HtmlWebpackPlugin({
            title: 'JustisOne',
            template: 'index.template.ejs',
            filename: 'index.html',
            baseUrl: "/"
        })
    ],
    module: {
        rules: [
           { test: /\.ts$/i, loader: 'awesome-typescript-loader', exclude: nodeModulesDir },
           { test: /\.html$/, loader: 'raw-loader' }
        ]
    },

    devServer : {
        host: 'localhost',
        port: 3000
    }
};

module.exports = config;