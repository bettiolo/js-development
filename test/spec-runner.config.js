/*global require:true */

require.config({
    baseUrl: '../',
    urlArgs: 'cb=' + Math.random(),
    paths: {
        'jasmine' : 'lib/jasmine-1.3.0/jasmine',
        'jasmine-html' : 'lib/jasmine-1.3.0/jasmine-html',
        'domReady' : 'lib/domReady-2.0.1/domReady',
        'beer' : 'js/beer',
        'beer-spec' : 'js/beer.spec',
        'spec-runner' : 'test/spec-runner',
        'spec-runner-config' : 'test/spec-runner.config'
    },
    shim: {
        'jasmine-html' : {
            deps : ['jasmine'],
            exports : 'jasmine'
        },
        'beer-spec' : {
            deps : ['beer']
        }
    }
});

require(['spec-runner'],
function (specRunner) {
    'use strict';

    specRunner([
        'beer-spec'
    ]);

});
