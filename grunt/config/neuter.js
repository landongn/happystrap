/*jshint node:true*/
'use strict';

// https://github.com/dylang/grunt-neuter

// Concatenate files in the order you require.

module.exports = function (config) {
	return {
		options : {
			basePath : config.source
		},
		app: {
			src: config.source + 'js/app.js',
			dest: config.static + 'js/app.develop.js'
		},
		libsDevelop: {
			options: {
				template : '{%= src %}'
			},
			src: config.source + 'js/libs.js',
			dest: config.static + 'js/libs.develop.js'
		},
		libsBuild: {
			options: {
				template : '{%= src %}',
				process : function (src) {
					// Use the production version of ember in production.
					return src.replace('lib/ember/ember.js', 'lib/ember/ember.prod.js');
				}
			},
			src: config.source + 'js/libs.js',
			dest: config.static + 'js/libs.develop.js'
		}
	};
};
