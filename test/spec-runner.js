/*global define:true, require:true */

define('spec-runner', ['domReady!', 'jasmine-html'],
function (_, jasmine) {
    'use strict';

    var jasmineEnv = jasmine.getEnv(),
        htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.updateInterval = 250;
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    return function (specs) {
        require(specs, function () {
            jasmineEnv.execute();
        });
    };

});