/*jshint node:true*/
'use strict';

// https://github.com/gruntjs/grunt-contrib-compass

// Compile Sass to CSS using Compass.
// Most options should be specified in project/source/scss/config.rb

module.exports = function (config) {
	return {
		options: {
			config: config.source + 'scss/config.rb'
		},
		build: {},
		develop: {
			options: {
				outputStyle: 'expanded'
			}
		}
	};
};
