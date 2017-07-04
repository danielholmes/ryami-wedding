const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            require('babel-plugin-transform-strict-mode')
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|png)$/,
                use: ['url-loader?mimetype=image/png']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.js', 'dist/*.css', 'dist/*.woff']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};