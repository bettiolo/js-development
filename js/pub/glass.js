/*global define:true */

define([], function () {
	'use strict';

	/**
	 * @constructor
	 * @param {number} capacity The capacity of the glass in oz.
	 * @abstract
	 */
	function Glass(capacity) {
		this.quantity = 0;
		this.capacity = capacity;
	}

	Glass.prototype.constructor = Glass;

	/** @param {number} consumedQuantity How much has been consumed in oz. */
	Glass.prototype.consume = function (consumedQuantity) {
		if (this.quantity > 0) {
			this.quantity -= consumedQuantity;
		}
	};

	/**
	 * Enumerator for the beer volume in oz.
	 * @constant
	 * @readonly
	 * @enum {number}
	 */
	Glass.Size = {
		PINT : 20,
		HALF_PINT : 10,
		JUG : 60
	}; // should use Object.freeze

	return Glass;
});