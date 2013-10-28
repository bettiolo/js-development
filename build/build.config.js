/*global module */
/**
 * Generic configuration for the build
 */
module.exports = {
	buildDir : 'build',
	distDir : 'dist',
	appDir : 'js',
	appFiles : {
		js : [
			'js/**/*.js',
			'!js/**/*.spec.js'
		],
		specs : [
			'js/**/*.spec.js'
		]
	}
};