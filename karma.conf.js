// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    junitReporter: {
      outputDir: require('path').join(__dirname, './__reports'),
      outputFile: 'unittests.junit.xml',
      useBrowserName: false,
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './__reports'),
      reporters: [
        { type: 'cobertura', subdir: './', file: 'coverage.cobertura.xml' },
        { type: 'lcovonly', subdir: './', file: 'coverage.lcov' }
      ],
    },
    browsers: ['Chrome'],
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
  });
};
