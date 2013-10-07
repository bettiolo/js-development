describe("Glass", function() {
	var glass;

	beforeEach(function() {
		glass = new Glass();
	});

	it("It is empty", function() {
		expect(glass.volume()).toEqual(0);
	});
});

describe('Pint', function() {
	var pint;

	beforeEach(function() {
		pint = new Pint();
	});

	it('A new pint should be 20 fl. oz.', function () {
		expect(pint.volume()).toEqual(20);
	});
	it('The glass should be 20 fl. oz. in max volume', function () {
		expect(pint.maxVolume()).toEqual(20);
	});
});

describe('HalfPint', function() {
	var halfPint;

	beforeEach(function() {
		halfPint = new HalfPint();
	});

	it('A new half pint should be 10 fl. oz.', function () {
		expect(halfPint.volume()).toEqual(10);
	});

	it('The glass should be 10 fl. oz. in max volume', function () {
		expect(halfPint.maxVolume()).toEqual(10);
	});
});

describe('Jug', function () {
	var jug;

	beforeEach(function () {
		jug = new Jug();
	});

	it('It is served as 3 pints (60 fl. oz.)', function () {

		expect(jug.maxVolume()).toEqual(60);
	});

});

describe("Customer", function() {
	var customer;
	var pint;

	beforeEach(function() {
		customer = new Customer();
		pint = new Pint();
	});

	it("Every time the customer drinks, 1 fluid ounce is consumed", function() {
		customer.drink(pint);

		expect(pint.volume()).toEqual(19);
	});

	it("Every time the customer quaffs, 4 fluid ounces are consumed", function() {
		customer.quaff(pint);
		expect(pint.volume()).toEqual(16);
	});

	it("Every time customer downs in one, the entire remaining contents of the glass are consumed", function(){
		customer.downInOne(pint);
		expect(pint.volume()).toEqual(0);
	});
});


