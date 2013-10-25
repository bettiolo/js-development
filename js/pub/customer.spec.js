/*global define, describe, it, beforeEach, expect */

define(['pub/customer', 'pub/pint', 'pub/halfPint', 'pub/jug'], function (
    /** @type {!Customer} */ Customer,
    /** @type {!Pint} */ Pint,
    /** @type {!HalfPint} */ HalfPint,
    /** @type {!Jug} */ Jug) {
    'use strict';

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