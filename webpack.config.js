const path = require('path');
const сopy = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build', 'blondytan3'),
        filename: 'scripts.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new copy([
            { from: path.join(__dirname, 'src', 'templates'), test: /\.twig$/, to: path.join(__dirname, 'build', 'blondytan3', 'templates')}
        ]),
        new MiniCssExtractPlugin({ 
            filename: path.join(__dirname, 'src', 'css', 'styles.css')
        })
    ]
};