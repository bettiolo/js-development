/*global define:true, require:true */

define(['jasmine-html'], function (jasmine) {
    'use strict';

    return function (specs) {

        var jasmineEnv = jasmine.getEnv(),
            htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.updateInterval = 250;
        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.specFilter = function (spec) {
            return htmlReporter.specFilter(spec);
        };

        require(specs, function () {
            jasmineEnv.execute();
        });

    };

});