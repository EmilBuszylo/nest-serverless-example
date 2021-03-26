const webpack = require('webpack');
const path = require('path');
const slsw = require('serverless-webpack');

const nodeExternals = require('webpack-node-externals');

const mode = slsw.lib.webpack.isLocal ? 'development' : 'production';

module.exports = {
  mode,
  target: 'node',
  entry: slsw.lib.entries,
  externals: [nodeExternals(), 'newrelic'],
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  }
};
