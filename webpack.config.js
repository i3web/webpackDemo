const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
        print: './src/js/print.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpeg|png|svg|jpg|gif)$/,
                use: {loader: 'file-loader', options: {name: "[name].[ext]", outputPath: 'img'}}//相对总的输出目录dist
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./src'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename:"index.html",
            title: 'index output management',
            minify: {removeAttributeQuotes: true},
            template:path.resolve(__dirname,'./src/index.html'),
            favicon: './src/favicon.ico',
            hash:true,
            chunks:['app']
        }) ,
        new HtmlWebpackPlugin({
            filename:"test.html",
            title: 'test3 output management',
            minify: {removeAttributeQuotes: true},
            template:path.resolve(__dirname,'./src/index3.html'),
            favicon: './src/favicon.ico',
            hash:true,
            chunks:['app']
        })
    ]

};
