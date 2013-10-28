/*global module */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : {
			dist : [ 'dist' ]
		},
		requirejs : {
			app : {
				options : {
					name : 'pub',
					mainConfigFile : 'build/require.config.js',
					optimize : 'none',
					include : [ 'lib/almond.js' ],
					out : 'dist/pub.js',
					wrap : {
						startFile : 'build/wrap.start',
						endFile : 'build/wrap.end'
					}
				}
			}
		},
		concat: {
			options : {
				separator: '\n'
			},
			specs : {
				src : ['js/pub/*.spec.js'],
				dest : 'dist/pub.spec.js',
				nonull : true
			}
		},
		jshint : {
			options: {
				jshintrc: '.jshintrc'
			},
			development: [
				'js/**/*.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', [ 'clean', 'requirejs', 'concat' ]);
	grunt.registerTask('test', [ 'jshint' ]);
};
