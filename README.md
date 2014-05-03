js-development
==============

[![Build Status](https://travis-ci.org/bettiolo/js-development.png?branch=master)](https://travis-ci.org/bettiolo/js-development)
[![Dependency Status](https://gemnasium.com/bettiolo/js-development.png)](https://gemnasium.com/bettiolo/js-development)

JavaScript development workflow and tools

Examples included:
  - [EcmaScript 5.1](http://www.ecma-international.org/ecma-262/5.1/) object oriented JavaScript with prototypal inheritance and base constructors with parameters
    - [Introduction to Object Oriented Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
    - [Learning JavaScript Design Patterns book](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)
    - [MDN on inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance)
    - [ES5 and ES6 inheritance video](http://www.youtube.com/watch?v=NyClWddeO_A)
    - [ES5 Compatibility Table](http://kangax.github.io/es5-compat-table/) IE8 and older does not support `Object.create`
    - [Essential JavaScript Namespacing Patterns](http://addyosmani.com/blog/essential-js-namespacing/)
    - [Google javascript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
    - [Values, Variables and Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Object_literals)
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
    - [RequireJs r.js task](https://github.com/jrburke/r.js) bundles application and inlines [Almond.js](https://github.com/jrburke/almond)
    - [Concat task](https://github.com/gruntjs/grunt-contrib-concat) concatenates jasmine specs
    - [Clean task](https://github.com/gruntjs/grunt-contrib-clean) cleans the output directory
    - [JSHint task](https://github.com/gruntjs/grunt-contrib-jshint) validates application and tests
    - [UglifyJs task](https://github.com/gruntjs/grunt-contrib-uglify) minifies and generates source maps
    - [Watch task](https://github.com/gruntjs/grunt-contrib-watch) watches for file changes and executes grunt tasks and reloads the browser using [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
    - [Karma task](https://github.com/karma-runner/grunt-karma) karma runner that runs test on watch trigger
  - [Gemnasium](https://gemnasium.com) automatically checks package.json for outdated packages

Todo:
  - ES6 Module support
  - [Bower](https://github.com/bower/bower) package manager
  - Mocha, CasperJs + PhantomJs for headless browser functional testing (like Selenium)
  - Add EcmaScript3 support for IE8
  - Sauce Labs cross browser unit and functional testing
  - Create a [Volo](http://volojs.org/) package
    - Use volo-ghdeploy to publish to GitHub Pages
  - [Version Badge](http://badge.fury.io/) to provide package version and link
  - [Jasmine grunt task](grunt-contrib-jasmine) to run jasmine specs via grunt instead of karma
  - [JsDoc grunt taks](https://github.com/krampstudio/grunt-jsdoc-plugin) generates documentation
  - [FileRev grunt taks](https://github.com/yeoman/grunt-filerev) generates file revision hashes to improve caching
  - Templates grunt task replaces placeholders and generate output files
  - https://github.com/thomasboyt/grunt-microlib
  
Unsorted:
  - [Local Tunnel](http://progrium.com/localtunnel) for sharing local web server (ex. testing on mobile device)
  - CodeKit
  - http://component.io
  - [waffle.io](https://waffle.io) to [manage](https://waffle.io/bettiolo/js-development) development tasks
  - http://coveralls.io
  - http://codeship.io
  - http://blanketjs.org/ checks test code coverage
  - https://nodei.co/npm/*.png to get the npm package status image
  - http://ci.testling.com/ runs javascript tests in multiple browsers
  - https://david-dm.org/
  - http://www.letscodejavascript.com/
  - http://www.objectplayground.com/
  - https://github.com/khan4019/HighPerformanceJSandCSS
  - http://davidshariff.com/js-quiz/
  - https://github.com/mdevils/node-jscs
  - http://jashkenas.github.io/docco/
  - http://browserify.org/
  - http://linemanjs.com
  - http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  - http://javascript.info/tutorial/bubbling-and-capturing
  - http://drone.io
  - https://github.com/boennemann/badges All the badges in one page
