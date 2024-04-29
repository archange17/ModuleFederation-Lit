const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: './out-tsc/index',
    mode: 'none',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8000
    },
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'lit',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './out-tsc/index.js',
                './MyElement': './out-tsc/components/my-element.js',
            },
            shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
