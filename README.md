js-development [![Build Status](https://travis-ci.org/bettiolo/js-development.png?branch=master)](http://travis-ci.org/bettiolo/js-development)
==============

JavaScript development workflow and tools

Examples included:
  - [EcmaScript 5.1](http://www.ecma-international.org/ecma-262/5.1/) object oriented JavaScript with prototypal inheritance and base constructors with parameters
    - [MDN on inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance)
    - [ES5 and ES6 inheritance video](http://www.youtube.com/watch?v=NyClWddeO_A)
    - [ES5 Compatibility Table](http://kangax.github.io/es5-compat-table/) tl;dr; IE8 and older not supported
  - [Jasmine](http://pivotal.github.io/jasmine/) spec & test runner for unit testing
  - [JsHint](http://www.jshint.com) for enforcing coding style with .jshintrc
    - [Options reference](http://www.jshint.com/docs/options/)
  - [JsDoc3](http://usejsdoc.org) for documenting JavaScript and enriching editor intellisense
    - [Closure Compiler type syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler#types)
    - [Tags reference](http://usejsdoc.org/index.html#JSDoc3_Tag_Dictionary)
  - [EditorConfig](http://editorconfig.org) for cross-editor consistency
    - [Properties reference](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)
  - [RequireJs](http://requirejs.org) with AMD dependencies
    - [Why AMD](http://requirejs.org/docs/whyamd.html)
    - [AMD Api](https://github.com/amdjs/amdjs-api/wiki/AMD)
  - [JsTestDriver](https://code.google.com/p/js-test-driver/) support for running unit tests in multiple browsers
    - [jsTestDriver.conf](https://code.google.com/p/js-test-driver/wiki/ConfigurationFile)
    - [Jasmine JsTestDriver Adapter](https://github.com/ibolmo/jasmine-jstd-adapter)
  - [Karma Test Runner](http://karma-runner.github.io/) + [PhantomJs](http://phantomjs.org/) for headless unit test running
    - [karma.conf.js reference](http://karma-runner.github.io/0.10/config/configuration-file.html)
    - [karma-jasmine adapter shipped by default](https://github.com/karma-runner/karma-jasmine)
  - [Travis-Ci](https://travis-ci.org) to automatically run tests on push to GitHub
    - [.travis.yml & package.json configuration for Karma](http://karma-runner.github.io/0.10/plus/travis.html)

Todo:
  - ES6 Module support
  - [Bower](https://github.com/bower/bower) package manager
  - Grunt task runner
  - UglifyJs for minifying js + sourcemaps
  - Mocha + PhantomJs for headless browser testing (like Selenium)
  - Keyboard Shortcuts
  - Add EcmaScript3 support for IE8

Other:
  - [Local Tunnel](http://progrium.com/localtunnel) for sharing local web server (ex. testing on mobile device)
  - LiveReload extension for Chrome
  - CodeKit
