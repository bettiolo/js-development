/*global define:true*/

define(['jasmine-html'], function(jasmine) {
    'use strict';

    return {
        executeSpecs : function executeSpecs(specs) {
            var jasmineEnv = jasmine.getEnv(),
                htmlReporter = new jasmine.HtmlReporter();

            jasmineEnv.updateInterval = 1000;
            jasmineEnv.addReporter(htmlReporter);
            jasmineEnv.specFilter = function(spec) {
                return htmlReporter.specFilter(spec);
            };

            function executeSpec() {
                require(specs, function(){
                    jasmineEnv.execute();
                });
            }

            function executeSpecOnLoad() {
                var currentWindowOnload = window.onload;
                window.onload = function() {
                    if (currentWindowOnload) {
                        currentWindowOnload();
                    }
                    executeSpec();
                };
            }

            if (document.readyState === 'complete') {
                executeSpec();
            } else {
                executeSpecOnLoad();
            }
        }
    };

});