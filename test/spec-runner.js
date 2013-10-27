/*global require */

require(['../build/require.config'], function () {
	'use strict';

	require(['domReady!', 'jasmine-html'], function (_, jasmine) {
		var jasmineEnv = jasmine.getEnv(),
			htmlReporter = new jasmine.HtmlReporter();

		jasmineEnv.updateInterval = 250;
		jasmineEnv.addReporter(htmlReporter);
		jasmineEnv.specFilter = function (spec) {
			return htmlReporter.specFilter(spec);
		};
		jasmineEnv.execute();
	});

});