/*global require:true*/

require.config({
    baseUrl: '../',
    urlArgs: 'cb=' + Math.random(),
    paths: {
        'jasmine' : 'lib/jasmine-1.3.0/jasmine',
        'jasmine-html' : 'lib/jasmine-1.3.0/jasmine-html',
        'beer' : 'js/beer',
        'beer-spec' : 'js/beer.spec',
        'spec-runner-helper' : 'test/spec-runner-helper'
    },
    shim: {
        'jasmine' : {
            exports: 'jasmine'
        },
        'jasmine-html' : {
            deps : ['jasmine'],
            exports : 'jasmine'
        },
        'beer-spec' : {
            deps : ['beer']
        },
        'spec-runner-helper' : {
            deps : ['jasmine-html'],
            exports : 'specRunner'
        }
    }
});

require(['spec-runner-helper'], function(specRunner) {
    'use strict';

    var specs = [];
    specs.push('beer-spec');

    specRunner.executeSpecs(specs);

});