const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const p = new HtmlPlugin({
  template: './src/index.html',   // 指定要复制哪个html页面
  filename: './index.html'        // 指定复制出来的存放路径、文件名
})

module.exports = {
  mode: "development",    // 代表 webpack 运行的模式，development 和 production
  entry: path.join(__dirname, './src/index.js'),  // 指定要处理哪个文件
  output: {
    path: path.join(__dirname, './dist'),    // 输出的目录
    filename: 'js/index.js'                  // 输出的文件名
  },
  devServer: {  
    open: true,         // 首次打包成功后，自动打开浏览器
    host: '127.0.0.1',  // 指定运行的主机地址
    port: 80            // 指定运行的端口
  },
  devtool: 'eval-source-map',   // 开发阶段，source-map 源码报错行数对应
  resolve: {
    alias: {           // 定义别名，@ 符号表示 src 源代码这层目录
      '@' : path.join(__dirname, './src')
    }
  },
  plugins: [p],         // 第三方插件，来 webpack 运行时，会加载这些插件
  module:{              // 定义了不同模块对应的 loader
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.jpg|png|gif$/, use: 'url-loader?limit=4096&outputPath=images'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  }
};
