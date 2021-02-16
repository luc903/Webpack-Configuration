const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    target: ['es5'],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist'
                        }
                    }, 
                    { 
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    { 
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }, 
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src/images',
                    outputPath: 'images'
                }
            }
        ]
    }
};