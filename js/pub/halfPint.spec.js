/*global define, describe, it, beforeEach, expect */

define(['pub/halfPint'], function (HalfPint) {
    'use strict';

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