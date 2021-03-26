import slsw from "serverless-webpack";

import nodeExternals from "webpack-node-externals";
import webpack from "webpack";
const path = require("path");
const mode = slsw.lib.webpack.isLocal ? "development" : "production";

module.exports = {
  mode,
  target: "node",
  entry: slsw.lib.entries,
  externals: [nodeExternals(), "newrelic"],
  resolve: {
    extensions: [".ts"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".webpack"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
