const path = require('path');
const webpack = require('webpack');

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
  devtool: 'inline-source-map',

  resolve: { extensions: ['.ts', '.js'] },

  entry: './index.ts',

  output: {
    path: path.resolve(__dirname, 'bundles'),
    publicPath: '/',
    filename: 'ngx-translate-messageformat-compiler.umd.js',
    library: 'ngx-translate-messageformat-compiler',
    libraryTarget: 'umd'
  },

  // require those dependencies but don't bundle them
  externals: [/^\@angular\//, /^rxjs\//, /^messageformat$/, /^@ngx-translate\//],

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: ['./node_modules']
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: [/\.spec\.ts$/]
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        tslintLoader: {
          emitErrors: false,
          failOnHint: false
        }
      }
    })
  ],

  mode: 'production'
};
