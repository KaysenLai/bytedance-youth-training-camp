const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require("json5");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    other: "./src/other.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // webpack 5 自动把dist删除
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ],
  module: {
    rules: [
      {
        // 匹配什么样子的文件
        test: /\.css$/i,
        // 使用loader ， 从后到前执行
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // webpack 会默认使用 file-loader
        // 如果想自己扩展的话，可以使用 type: "javascript/auto" 这个值可以阻止 webpack 使用默认的 loader
        type: "asset/resource",
      },
      // webpack 只认js，加载字体和加载图片一样
      // webpack5 都已经给提供了内置的 loader 来处理
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    open:true,
    port: 3000
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};
