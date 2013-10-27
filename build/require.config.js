/*global require */

require.config({
	baseUrl : '../',
	// urlArgs : 'cb=' + Math.random(),
	paths : {
		'pub' : 'js/pub',
		'jasmine' : 'lib/jasmine/jasmine',
		'jasmine-html' : 'lib/jasmine/jasmine-html',
		'domReady' : 'lib/domReady',
		'spec-runner' : 'test/spec-runner'
	},
	shim : {
		'jasmine-html' : {
			deps : ['jasmine', 'js/pub.spec'],
			exports : 'jasmine'
		}
	}
});