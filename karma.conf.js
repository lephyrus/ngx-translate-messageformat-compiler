module.exports = function(config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    files: [ { pattern: './specs-bundle.js', watched: false } ],
    preprocessors: { './specs-bundle.js': ['webpack'] },
    webpack: {
      resolve: {
        extensions: ['.ts', '.js'],
        modules: ['./src', 'node_modules']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader"
          }
        ]
      },

      // disable warnings about bundle size for tests
      performance: { hints: false }
    },
    webpackMiddleware: { stats: 'errors-only'},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  };

  config.set(configuration);
};
