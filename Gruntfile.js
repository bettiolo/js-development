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
		},
		uglify : {
			dist : {
				files : {
					'dist/pub.min.js': ['dist/pub.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', [ 'clean', 'requirejs', 'concat', 'uglify' ]);
	grunt.registerTask('test', [ 'jshint' ]);
};
