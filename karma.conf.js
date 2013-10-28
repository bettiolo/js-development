/*global module */

module.exports = function (config) {
	'use strict';

	config.set({
		basePath : '',
		frameworks : ['jasmine'],
		files : [
			'dist/pub.js',
			'js/**/*.spec.js'
		],
		exclude : [

		],
		reporters : ['dots'],
		port : 9876,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : false,
		browsers : ['PhantomJS'],
		captureTimeout : 60000,
		singleRun : false
	});
};
