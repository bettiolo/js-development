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