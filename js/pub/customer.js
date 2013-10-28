/*global define */

define([], function () {
	'use strict';

	/** @constructor */
	function Customer() {

	}

	/** @param {Glass} glass */
	Customer.prototype.drink = function (glass) {
		glass.consume(1);
	};
	/** @param {Glass} glass */
	Customer.prototype.quaff = function (glass) {
		glass.consume(4);
	};
	/** @param {Glass} glass */
	Customer.prototype.downInOne = function (glass) {
		glass.consume(glass.quantity);
	};

	return Customer;
});