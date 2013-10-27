/*global module */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		requirejs : {
			compile : {
				options : {
					appDir : 'js',
					mainConfigFile : 'build/require.config.js',
					optimize: 'none',
					// useStrict: true,
					// baseUrl: 'test',
					dir : 'dist',
					modules : [
						{
							name : 'dist/pub'
						},
						{
							name : 'dist/pub.spec',
							exclude : [ 'dist/pub' ]

						}
					],
					removeCombined: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
