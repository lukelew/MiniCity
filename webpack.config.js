const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    watch: true,
       watchOptions: {
           poll: 1000, // 每秒询问多少次
           aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
           ignored: /node_modules/ //忽略时时监听
       },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};