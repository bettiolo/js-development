/*global define */

/**
 * The main module that defines the public interface for pub, a made-up library.
 */
define(function (require) {
    'use strict';

    var Glass = require('pub/glass'),
        Pint = require('pub/pint'),
        HalfPint = require('pub/halfPint'),
        Jug = require('pub/jug'),
        Customer = require('pub/customer');

    window.pub = {
        Glass : Glass,
        Pint : Pint,
        HalfPint : HalfPint,
        Jug : Jug,
        Customer : Customer
    };

	return window.pub;
});
