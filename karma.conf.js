module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [ 'lib/**/*.js', 'specs/**/*.spec.js' ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    reporters: ['probedock'],

    // customize the configuration
    probedock: {
      config: {
        project: {
          category: 'Karma'
        }
      }
    },

    // Start these browsers, currently available:
    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'probedock-karma'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
