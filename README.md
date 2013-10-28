js-development
==============

[![Build Status](https://travis-ci.org/bettiolo/js-development.png?branch=master)](https://travis-ci.org/bettiolo/js-development)
[![Dependency Status](https://gemnasium.com/bettiolo/js-development.png)](https://gemnasium.com/bettiolo/js-development)

JavaScript development workflow and tools

Examples included:
  - [EcmaScript 5.1](http://www.ecma-international.org/ecma-262/5.1/) object oriented JavaScript with prototypal inheritance and base constructors with parameters
    - [MDN on inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance)
    - [ES5 and ES6 inheritance video](http://www.youtube.com/watch?v=NyClWddeO_A)
    - [ES5 Compatibility Table](http://kangax.github.io/es5-compat-table/) IE8 and older does not support `Object.create`
    - [Essential JavaScript Namespacing Patterns](http://addyosmani.com/blog/essential-js-namespacing/)
  - [Jasmine](http://pivotal.github.io/jasmine/) spec & test runner for unit testing
  - [JsHint](http://www.jshint.com) for enforcing coding style with .jshintrc
    - [.jshintrc options reference](http://www.jshint.com/docs/options/)
  - [JsDoc3](http://usejsdoc.org) for documenting JavaScript and enriching editor intellisense
    - [Tags reference](http://usejsdoc.org/index.html#JSDoc3_Tag_Dictionary)
    - [Annotating JavaScript for the Closure Compiler](https://developers.google.com/closure/compiler/docs/js-for-compiler)
    - [Closure Compiler type syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler#types)
  - [EditorConfig](http://editorconfig.org) for cross-editor consistency
    - [.editorconfig properties reference](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)
  - [RequireJs](http://requirejs.org) with AMD dependencies
    - [Why AMD](http://requirejs.org/docs/whyamd.html) Asynchronous vs synchronous dependency loading
    - [AMD Api](https://github.com/amdjs/amdjs-api/wiki/AMD) How to design an AMD Api
  - [JsTestDriver](https://code.google.com/p/js-test-driver/) support for running unit tests in multiple browsers
    - [jsTestDriver.conf configuration reference](https://code.google.com/p/js-test-driver/wiki/ConfigurationFile)
    - [Jasmine JsTestDriver Adapter](https://github.com/ibolmo/jasmine-jstd-adapter)
  - [Karma Test Runner](http://karma-runner.github.io/) + [PhantomJs](http://phantomjs.org/) for headless unit test running
    - [karma.conf.js configuration reference](http://karma-runner.github.io/0.10/config/configuration-file.html)
    - [karma-jasmine adapter shipped by default](https://github.com/karma-runner/karma-jasmine)
  - [Travis-Ci](https://travis-ci.org) to automatically run tests on push to GitHub
    - [.travis.yml configuration reference](http://about.travis-ci.org/docs/user/build-configuration/)
    - [.travis.yml & package.json configuration for Karma](http://karma-runner.github.io/0.10/plus/travis.html)
  - [Grunt task runner](http://gruntjs.com/) to automate repetitive tasks
    - [RequireJs r.js task](https://github.com/jrburke/r.js) bundles application
    - [Concat task](https://github.com/gruntjs/grunt-contrib-concat) concatenates jasmine specs
    - [Clean task](https://github.com/gruntjs/grunt-contrib-clean) cleans the output directory
    - [JSHint task](https://github.com/gruntjs/grunt-contrib-jshint) validates application and tests
    - [UglifyJs task](https://github.com/gruntjs/grunt-contrib-uglify) minifies and generates source maps
    - [Watch task](https://github.com/gruntjs/grunt-contrib-watch) watches for file changes and executes grunt tasks and reloads the browser using [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
  - [Gemnasium](https://gemnasium.com) automatically checks package.json for outdated packages

Todo:
  - ES6 Module support
  - [Bower](https://github.com/bower/bower) package manager
  - Mocha + PhantomJs for headless browser functional testing (like Selenium)
  - Add EcmaScript3 support for IE8
  - Sauce Labs cross browser unit and functional testing
  - Create a [Volo](http://volojs.org/) package
    - Use volo-ghdeploy to publish to GitHub Pages
  - [Version Badge](http://badge.fury.io/) to provide package version and link
  - [Jasmine grunt task](grunt-contrib-jasmine) to run jasmine specs via grunt instead of karma
  
Other:
  - [Local Tunnel](http://progrium.com/localtunnel) for sharing local web server (ex. testing on mobile device)
  - CodeKit
  - component.io
  - [waffle.io](https://waffle.io) to [manage](https://waffle.io/bettiolo/js-development) development tasks
  - coveralls.io
  - codeship.io
