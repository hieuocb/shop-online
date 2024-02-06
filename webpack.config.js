// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "shop.bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Trang chủ',
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['homepage']
    }),
    new HtmlWebpackPlugin({
        title: 'Về chúng tôi',
        filename: 'about.html',
        template: './src/about.html',
        chunks: ['about']
    }),
    new HtmlWebpackPlugin({
        title: 'Liên hệ',
        filename: 'contact.html',
        template: './src/contact.html',
        chunks: ['contact']
    })
  ],
//   optimization: {
//     splitChunks: {
//         chunks: 'all'
//     }
//   }
};
