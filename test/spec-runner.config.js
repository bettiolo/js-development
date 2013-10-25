/*global require */

require.config({
    baseUrl: '../js',
    // urlArgs: 'cb=' + Math.random(),
    paths: {
        'jasmine' : '../lib/jasmine-1.3.0/jasmine',
        'jasmine-html' : '../lib/jasmine-1.3.0/jasmine-html',
        'domReady' : '../lib/domReady-2.0.1/domReady',
        'spec-runner' : '../test/spec-runner',
        'spec-runner-config' : 'test/spec-runner.config'
    },
    shim: {
        'jasmine-html' : {
            deps : ['jasmine'],
            exports : 'jasmine'
        }
    }
});

require(['spec-runner'],
function (specRunner) {
    'use strict';

    specRunner([
        'pub/glass.spec',
        'pub/pint.spec',
        'pub/halfPint.spec',
        'pub/jug.spec',
        'pub/customer.spec'
    ]);

});
