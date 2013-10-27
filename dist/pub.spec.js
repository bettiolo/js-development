
/*global define, describe, it, beforeEach, expect */

define('pub/glass.spec',['pub/glass'], function (Glass) {
    

    describe('Glass', function() {
        var glass;

        beforeEach(function() {
            glass = new Glass();
        });

        it('Is empty', function() {
            expect(glass.quantity).toEqual(0);
        });
    });

});
/*global define, describe, it, beforeEach, expect */

define('pub/pint.spec',['pub/pint'], function (Pint) {
    

    describe('Pint', function() {
        var pint;

        beforeEach(function() {
            pint = new Pint();
        });

        it('Contains 20 fl. oz. of beer', function () {
            expect(pint.quantity).toEqual(20);
        });

        it('Has 20 fl. oz. of capacity', function () {
            expect(pint.capacity).toEqual(20);
        });
    });

});
/*global define, describe, it, beforeEach, expect */

define('pub/halfPint.spec',['pub/halfPint'], function (HalfPint) {
    

    describe('Half Pint', function() {
        var halfPint;

        beforeEach(function() {
            halfPint = new HalfPint();
        });

        it('Contains 10 fl. oz. of beer', function () {
            expect(halfPint.quantity).toEqual(10);
        });

        it('Has 10 fl. oz. of capacity', function () {
            expect(halfPint.capacity).toEqual(10);
        });
    });

});
/*global define, describe, it, beforeEach, expect */

define('pub/jug.spec',['pub/jug'], function (Jug) {
    

    describe('Jug', function () {
        var jug;

        beforeEach(function () {
            jug = new Jug();
        });

        it('Contains 3 pints (60 fl. oz.) of beer', function () {
            expect(jug.quantity).toEqual(60);
        });

        it('Has 3 pints (60 fl. oz.) of capacity', function () {
            expect(jug.capacity).toEqual(60);
        });
    });

});
/*global define, describe, it, beforeEach, expect */

define('pub/customer.spec',['pub/customer', 'pub/pint', 'pub/halfPint', 'pub/jug'], function (
    /** @type {!Customer} */ Customer,
    /** @type {!Pint} */ Pint,
    /** @type {!HalfPint} */ HalfPint,
    /** @type {!Jug} */ Jug) {
    

    describe('Customer', function() {
        var customer,
            halfPint,
            pint,
            jug;

        beforeEach(function() {
            customer = new Customer();
            halfPint = new HalfPint();
            pint = new Pint();
            jug = new Jug();
        });

        it('Drinks, 1 fl. oz. is consumed', function() {
            customer.drink(halfPint);
            customer.drink(pint);
            customer.drink(jug);

            expect(halfPint.quantity).toEqual(9);
            expect(pint.quantity).toEqual(19);
            expect(jug.quantity).toEqual(59);
        });

        it('Quaffs, 4 fl. oz. are consumed', function() {
            customer.quaff(halfPint);
            customer.quaff(pint);
            customer.quaff(jug);

            expect(halfPint.quantity).toEqual(6);
            expect(pint.quantity).toEqual(16);
            expect(jug.quantity).toEqual(56);
        });

        it('Downs in one, the remaining beer is consumed', function(){
            customer.downInOne(halfPint);
            customer.downInOne(pint);
            customer.downInOne(jug);

            expect(halfPint.quantity).toEqual(0);
            expect(pint.quantity).toEqual(0);
            expect(jug.quantity).toEqual(0);
        });
    });

});
/*global define */
define('dist/pub.spec',[
	'pub/glass.spec',
	'pub/pint.spec',
	'pub/halfPint.spec',
	'pub/jug.spec',
	'pub/customer.spec'
], function() {
	

});