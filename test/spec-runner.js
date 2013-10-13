require.config({
    baseUrl: "../",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jasmine: 'lib/jasmine-1.3.0/jasmine',
        'jasmine-html': 'lib/jasmine-1.3.0/jasmine-html',
        beer : 'js/beer',
        'beer-spec' : 'js/beer.spec'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'beer-spec' : {
            deps: ['beer']
        }
    }
});

require(['jasmine-html'], function(){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('beer-spec');

    function executeSpec() {
        require(specs, function(){
            jasmineEnv.execute();
        });
    }

    if (document.readyState === 'complete') {
        executeSpec();
    } else {
        var currentWindowOnload = window.onload;

        window.onload = function() {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            executeSpec();
        };
    }

});