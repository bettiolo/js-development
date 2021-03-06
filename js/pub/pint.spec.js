/*global pub, describe, it, beforeEach, expect */

describe('Pint', function () {
	'use strict';

	var pint;

	beforeEach(function () {
		pint = new pub.Pint();
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(pint.quantity).toEqual(20);
	});

	it('Has 20 fl. oz. of capacity', function () {
		expect(pint.capacity).toEqual(20);
	});

});
