/*jshint node:true*/
'use strict';

// https://github.com/gruntjs/grunt-contrib-compass

// Compile Sass to CSS using Compass.
// Most options should be specified in project/source/scss/config.rb

module.exports = function (config) {
  return {
    dev: {
      options: {
        file: 'app.js',
        args: [],
        nodeArgs: [],
        ignoredFiles: ['node_modules/**'],
        watchedExtensions: ['js', 'jade', 'scss'],
        watchedFolders: ['templates', 'routes', 'middleware'],
        delayTime: 1,
        legacyWatch: true,
        env: {
          PORT: '8000'
        },
        cwd: __dirname + '../../../project'
      }
    }
  };
};
