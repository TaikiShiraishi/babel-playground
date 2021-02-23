const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: resolve(__dirname, 'index.js'),
  },
  output: {
    path: resolve(__dirname, './'),
    filename: '[name].[contenthash].js',
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: resolve(__dirname, './'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 3000,
  },
}
