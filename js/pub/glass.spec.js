/*global define, describe, it, beforeEach, expect */

define(['pub/glass'], function (Glass) {
    'use strict';

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