const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      // publicPath: './',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 设置实时监听打包文件的目录
        open: true, // 自动打开浏览器
        port: 8080, // 端口
        hot: true, // 启动模块热更新
        hotOnly: true // 当模块热更新失败时浏览器也不自动刷新
        // proxy 可以配置跨域
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 引用html模板，之后生成的html则会按照此模板生成并且自动引入打包后的js文件
            filename: 'index.html'
        }),
        // new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
  };