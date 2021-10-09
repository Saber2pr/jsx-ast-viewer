const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const publicPath = (resourcePath, context) =>
  path.relative(path.dirname(resourcePath), context) + '/'

module.exports = {
  entry: "./src/app.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    filename: '[name][hash].min.js',
    path: path.join(__dirname, "build"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(woff|svg|eot|ttf|png)$/,
        use: ['url-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath },
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name][hash].css',
      chunkFilename: 'style.[id][hash].css',
    }),
    new MonacoWebpackPlugin()
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules|lib/
  }
}
