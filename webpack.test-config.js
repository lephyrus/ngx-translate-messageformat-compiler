const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['./src', 'node_modules']
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: ['./node_modules']
    }, {
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },

  // disable warnings about bundle size for tests
  performance: {hints: false}
};
