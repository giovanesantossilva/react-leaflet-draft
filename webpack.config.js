const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        cluster: path.resolve(__dirname, "public")
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".json" ]
    },
    plugins: [
        new ProvidePlugin({
            React: 'react'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /.(js)[x]?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /.css$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}
