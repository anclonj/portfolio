const webpack                       = require("webpack"),
    path                            = require("path");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, "src/scripts/main.js")
    },
    output: {
        path: path.resolve(__dirname, "docs/scripts"),
        publicPath: "/docs/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
        vue$: 'vue/dist/vue.esm.js'
        }
    },
    devtool: '#eval-source-map'
};