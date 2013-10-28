/*global pub, describe, it, beforeEach, expect */
describe('Glass', function() {
	'use strict';

    var glass;

    beforeEach(function() {
        glass = new pub.Glass();
    });

    it('Is empty', function() {
        expect(glass.quantity).toEqual(0);
    });

});
