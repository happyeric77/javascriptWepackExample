const path = require("path")
const webpack = require('webpack')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

console.log(path.resolve("/src"))
module.exports = {
    entry: "./webpack-source/app_ex1/app.js",
    output: {
        path: path.join(__dirname, "src"),
        filename: "app.js"
    },
    watch: true,
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({process: 'process/browser'}),
        new NodePolyfillPlugin()
    ],
}