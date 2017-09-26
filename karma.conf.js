module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test-config.js');

  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    files: [ { pattern: './specs-bundle.js', watched: false } ],
    preprocessors: { './specs-bundle.js': ['webpack'] },
    webpack: testWebpackConfig,
    webpackMiddleware: { stats: 'errors-only'},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(configuration);
};
