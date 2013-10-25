/*global define, describe, it, beforeEach, expect */

define(['pub/jug'], function (Jug) {
    'use strict';

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