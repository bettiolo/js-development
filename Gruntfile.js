/*global module */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		requirejs : {
			app : {
				options : {
					name : 'app',
					mainConfigFile : 'build/require.config.js',
					optimize : 'none',
					include : [ 'lib/almond.js' ],
					out : 'dist/pub.js',
					wrap : {
						startFile : 'build/wrap.start',
						endFile : 'build/wrap.end'
					}
				}
			},

			specs : {
				options : {
					name : 'pub.spec',
					mainConfigFile : 'build/require.config.js',
					optimize : 'none',
					include : [ 'lib/almond.js' ],
					exclude : [ ],
					out : 'dist/pub.spec.js',
					wrap : {
						startFile : 'build/wrap.start',
						endFile : 'build/wrap.spec.end'
					}
				}
			}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
