/*global module */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		requirejs : {
			compile : {
				options : {
					name : 'pub',
					mainConfigFile : 'test/spec-runner.config.js',
					optimize: 'none',
					// useStrict: true,
					out : 'dist/pub.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
