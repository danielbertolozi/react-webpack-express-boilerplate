const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/main/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          /node_modules/,
          /\/src\/test\//,
          /\/src\/service\//
        ],
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      },
      {
          test: /\.(png|jpg|jpeg|gif|ttf|otf)/,
          type: "asset/resource",
          include: /\/src\/assets/
      }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: "Boilerplate",
        template: "./src/main/BaseTemplate.html",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      }),
      new Dotenv()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "web",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/"
  },
};
