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
    //添加我们的插件 会自动生成一个html文件
    // plugins: [
    //     new HtmlwebpackPlugin({
    //         title: 'Hello World app'
    //     })
    // ],
    devServer: {
        contentBase:'./build',
        historyApiFallback: true,
        inline: true,
        hotOnly: true
    },
    node: {
        fs: "empty",
        net: "empty"
    }

};
