var path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: "source-map",
    
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),
        new webpack.optimize.UglifyJsPlugin({
      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    })
    ],
    devServer: {
        contentBase:path.join(__dirname,'/bulid/'),
        historyApiFallback: true,
        inline: true,
        hotOnly: true,
        compress:true,
        port:7000
    },
    node: {
        fs: "empty",
        net: "empty"
    }

};
