/* jshint node: true */
'use strict';

var fs = require('fs'),
	exec = require('child_process').exec;

// Get your ip address
function ip() {
	var interfaces = require('os').networkInterfaces();
	return Object.keys(interfaces).map(function (key) {
		return interfaces[key];
	}).reduce(function (last, item) {
		return item.reduce(function (last, item) {
			if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal) {
				return item.address;
			}
			return last;
		}) || last;
	}) || '0.0.0.0';
}

module.exports = function (grunt) {
	grunt.registerTask('application', 'An alias for nodemon server monitor', function (arg1) {
		var done = this.async();

		// Start up the Django server.
		// This will run `sh ./scripts/run.sh`, passing in the specified port.
		grunt.util.spawn({
			cmd : 'nodemon',
			args : [
				'./project/app.js'
			],
			opts : {
				stdio : 'inherit' // Send stdout to the console
			}
		}, function (err) {
			// If there was an error, log it and end the grunt task.
			if (err) {
				grunt.log.error(err);
			}
			done(!err);
		});
	});
};
