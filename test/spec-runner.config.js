/*global require */

require.config({
    baseUrl: '../js',
    // urlArgs: 'cb=' + Math.random(),
    paths: {
        'jasmine' : '../lib/jasmine-1.3.0/jasmine',
        'jasmine-html' : '../lib/jasmine-1.3.0/jasmine-html',
        'domReady' : '../lib/domReady-2.0.1/domReady',
        'glass-spec' : 'pub/glass.spec',
        'pint-spec' : 'pub/pint.spec',
        'halfPint-spec' : 'pub/halfPint.spec',
        'jug-spec' : 'pub/jug.spec',
        'customer-spec' : 'pub/customer.spec',
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
        'glass-spec',
        'pint-spec',
        'halfPint-spec',
        'jug-spec',
        'customer-spec'
    ]);

});
