const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const DIR_PUBLIC = path.join(__dirname, "src/public");
const DIR_CLIENT = path.join(__dirname, "client");

module.exports = {
  entry: DIR_CLIENT + "/index.jsx",
  output: {
    path: DIR_PUBLIC,
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: DIR_CLIENT + "/index.html",
      minify: {
        collapseWhitespace: true,
        // removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
};
