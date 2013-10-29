/*global describe */

describe('Pub', function () {
	'use strict';

});
/*global pub, describe, it, beforeEach, expect */

describe('Customer', function () {
	'use strict';

	var customer,
		halfPint,
		pint,
		jug;

	beforeEach(function () {
		customer = new pub.Customer();
		halfPint = new pub.HalfPint();
		pint = new pub.Pint();
		jug = new pub.Jug();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		expect(halfPint.quantity).toEqual(9);
		expect(pint.quantity).toEqual(19);
		expect(jug.quantity).toEqual(59);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		customer.quaff(halfPint);
		customer.quaff(pint);
		customer.quaff(jug);

		expect(halfPint.quantity).toEqual(6);
		expect(pint.quantity).toEqual(16);
		expect(jug.quantity).toEqual(56);
	});

	it('Drinks and then downs in one, the remaining beer is consumed', function () {
		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

	it('Cannot drink from a beer that has already been consumed', function () {
		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		customer.drink(halfPint);
		customer.drink(pint);
		customer.drink(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

	it('Cannot quaff from a beer that has already been consumed', function () {
		customer.downInOne(halfPint);
		customer.downInOne(pint);
		customer.downInOne(jug);

		customer.quaff(halfPint);
		customer.quaff(pint);
		customer.quaff(jug);

		expect(halfPint.quantity).toEqual(0);
		expect(pint.quantity).toEqual(0);
		expect(jug.quantity).toEqual(0);
	});

});

/*global pub, describe, it, beforeEach, expect */
describe('Glass', function () {
	'use strict';

	var glass;

	beforeEach(function () {
		glass = new pub.Glass();
	});

	it('Is empty', function () {
		expect(glass.quantity).toEqual(0);
	});

});

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
/*global pub, describe, it, beforeEach, expect */

describe('Jug', function () {
	'use strict';

	var jug;

	beforeEach(function () {
		jug = new pub.Jug();
	});

	it('Contains 3 pints (60 fl. oz.) of beer', function () {
		expect(jug.quantity).toEqual(60);
	});

	it('Has 3 pints (60 fl. oz.) of capacity', function () {
		expect(jug.capacity).toEqual(60);
	});

});
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
