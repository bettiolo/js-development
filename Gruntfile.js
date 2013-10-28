/*global module */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		cfg : grunt.file.readJSON('build/build-config.json'),
		clean : {
			dist : [ '<%= cfg.dist.dir %>' ]
		},
		requirejs : {
			app : {
				options : {
					name : '<%= cfg.app.namespace %>',
					mainConfigFile : '<%= cfg.build.dir %>/require.config.js',
					optimize : 'none',
					include : [ '<%= cfg.lib.dir %>/almond.js' ],
					out : '<%= cfg.dist.dir %>/pub.js',
					wrap : {
						startFile : '<%= cfg.build.dir %>/wrap.start',
						endFile : '<%= cfg.build.dir %>/wrap.end'
					}
				}
			}
		},
		concat: {
			options : {
				separator: '\n'
			},
			specs : {
				src : [ '<%= cfg.app.spec %>' ],
				dest : '<%= cfg.dist.spec %>',
				nonull : true
			}
		},
		jshint : {
			options : {
				jshintrc : '.jshintrc'
			},
			development : [ '<%= cfg.app.all %>' ]
		},
		uglify : {
			dist : {
				files : {
					'<%= cfg.dist.min %>': [ '<%= cfg.dist.bundle %>' ]
				},
				options : {
					// sourceMap : '<%= cfg.dist.dir %>/pub.min.map.js';
				}
			}
		},
		watch : {
			js : {
				files : [ '<%= cfg.app.all %>' ],
				tasks : [ 'build', 'test' ],
				options : {
					livereload : true
				}
			}
		},
		karma : {
			options : {
				basePath : '',
				frameworks : [ 'jasmine' ],
				exclude : [ ],
				reporters : [ 'dots' ],
				port : 9876,
				colors : true,
				logLevel : 'WARN',
				autoWatch : false,
				browsers : [ 'PhantomJS' ],
				captureTimeout : 60000,
				singleRun : false,
				files : [
					'<%= cfg.dist.min %>',
					'<%= cfg.dist.spec %>'
				]
			},
			spec : { }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('build', [ 'clean', 'requirejs', 'concat', 'uglify' ]);
	grunt.registerTask('test', [ 'jshint', 'karma:spec:run' ]);

	grunt.registerTask('default', [ 'build', 'test' ]);

};
