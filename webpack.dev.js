var webpack = require("webpack");
var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.join(ROOT_PATH, "src/yobo-mobile/");
var DIST_PATH = path.resolve(ROOT_PATH, "dist");

module.exports = {

  entry: SRC_PATH,
  output: {
    path: path.join(__dirname, "/../dist/assets"),
    filename: "[name].bundle.js",
    // publicPath: BUILD_PATH,
    sourceMapFilename: "[name].map"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [{
        loaders: [{
          test: /\.css$/,
          loader: 'style!css!px2rem?remUnit=75&remPrecision=8'
        }]
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",

      //     // {
      //     //   loader: "postcss-loader",
      //     //   options: {
      //     //     ident: "postcss", // Needed for now
      //     //     plugins: function() {
      //     //       // Set up plugins here
      //     //       return [require("autoprefixer"), require("precss")];
      //     //     }
      //     //   }
      //     // }
      //   ]
      // }
    ]
  },
  devServer: {
    port: 7777,
    host: "localhost",
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    // publicPath: BUILD_PATH,
    compress:true
  }
};