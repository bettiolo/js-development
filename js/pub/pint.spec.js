/*global define, describe, it, beforeEach, expect */

define(['pub/pint'], function (Pint) {
    'use strict';

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