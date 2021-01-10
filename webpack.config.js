// Require html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // webpack entry point. Module to start building dependency graph
    entry: __dirname + "/src/app/index.js",
    output: {
        // Folder to store generated bundle after build
        path: __dirname + "/dist",
        // Name of the generated bundle after build
        filename: "bundle.js",
        // public URL of the output directory when referenced in a browser
        publicPath: "/"
    },
    module: {
        // we define file patterns and their loaders
        rules: [

        ]
    },
    plugins: [
        // Array of plugins to apply to build chunks
        new HTMLWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ],
    devServer: {
        // config for webpack-dev-server
        contentBase: './src/public', //source of static assets
        port: 7700 //port to run dev-server
    }
}

