/*jshint node:true*/
'use strict';

var CONFIG = {
	source : 'project/source/',
	static : 'project/static/',
	templates : 'project/templates/',
	livereloadPort : 34567
};

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('grunt/tasks');

	grunt.initConfig({
		nodemon        : require('./grunt/config/nodemon')(CONFIG),
		watch          : require('./grunt/config/watch')(CONFIG),
		jshint         : require('./grunt/config/jshint')(CONFIG),
		compass        : require('./grunt/config/compass')(CONFIG),
		clean          : require('./grunt/config/clean')(CONFIG),
		copy           : require('./grunt/config/copy')(CONFIG),
		notify         : require('./grunt/config/notify')(CONFIG),
		neuter         : require('./grunt/config/neuter')(CONFIG),
		uglify         : require('./grunt/config/uglify')(CONFIG),
		concurrent     : require('./grunt/config/concurrent')(CONFIG),
		emberTemplates : require('./grunt/config/ember-templates')(CONFIG)
	});

	grunt.registerTask('server', function (port) {
		grunt.task.run([
			'clean:build',
			'copy:build',
			'concurrent:develop'
		]);
	});

	grunt.registerTask('build', [
		'clean:build',
		'concurrent:build',
		'uglify',
		'copy:build',
		'notify:build'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};
