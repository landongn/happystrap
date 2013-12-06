/*jshint node:true*/
'use strict';

// https://github.com/dgeb/grunt-ember-templates

// Precompile Handlebars templates for Ember.js.

module.exports = function (config) {
	return {
		options : {
			templateBasePath: config.source + 'templates/'
		},
		templates: {
			src: config.source + 'templates/{,*/}*.hbs',
			dest: config.static + 'js/templates.develop.js'
		}
	};
};
