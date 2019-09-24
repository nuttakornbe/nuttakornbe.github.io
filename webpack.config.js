const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      { test: /\.html$/, use: [{ loader: "html-loader" }]},
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/},
      { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]},
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{ loader: "file-loader" }]},
      { test: /\.(png|jpg|gif)$/, use: [{ loader: "file-loader" }]}
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
    alias: {
      fs: path.resolve(__dirname, "src/mock-fs.js")
    }
  },
  node: {
    // fs: "empty",
    child_process : "empty",
    net : "empty",
    tls: "empty"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin( {
    template: "./public/index.html",
    filename: "index.html"
   })],
   optimization: {
    sideEffects: true
  }
};