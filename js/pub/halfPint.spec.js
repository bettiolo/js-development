/*global pub, describe, it, beforeEach, expect */

describe('Half Pint', function () {
	'use strict';

	var halfPint;

	beforeEach(function () {
		halfPint = new pub.HalfPint();
	});

	it('Contains 10 fl. oz. of beer', function () {
		expect(halfPint.quantity).toEqual(10);
	});

	it('Has 10 fl. oz. of capacity', function () {
		expect(halfPint.capacity).toEqual(10);
	});

});