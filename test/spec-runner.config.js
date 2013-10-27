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
