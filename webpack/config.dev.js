const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "..", "src", "index.js"),
  watch: true,
  output: {
    path: path.resolve(__dirname, "..", "lib"),
    filename: "react-devto.js",
    chunkFilename: "[name].js",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "..", "src")],
        exclude: [path.resolve(__dirname, "..", "node_modules")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions"
                }
              }
            ]
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  devtool: "eval-source-map"
};
