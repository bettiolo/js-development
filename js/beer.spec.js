// 'use strict';

describe('A new glass', function() {
    var glass;

    beforeEach(function() {
        glass = new Glass();
    });

    it('is empty', function() {
        expect(glass.quantity).toEqual(0);
    });
});

describe('Pint', function() {
    var pint;

    beforeEach(function() {
        pint = new Pint();
    });

    it('A new pint should be 20 fl. oz.', function () {
        expect(pint.quantity).toEqual(20);
    });
    it('The glass should be 20 fl. oz. in capacity', function () {
        expect(pint.capacity).toEqual(20);
    });
});

describe('HalfPint', function() {
    var halfPint;

    beforeEach(function() {
        halfPint = new HalfPint();
    });

    it('A new half pint should be 10 fl. oz.', function () {
        expect(halfPint.quantity).toEqual(10);
    });

    it('The glass should be 10 fl. oz. in capacity', function () {
        expect(halfPint.capacity).toEqual(10);
    });
});

describe('Jug', function () {
    var jug;

    beforeEach(function () {
        jug = new Jug();
    });

    it('It is served as 3 pints (60 fl. oz.)', function () {
        expect(jug.capacity).toEqual(60);
    });

});

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

    it('Every time the customer drinks, 1 fluid ounce is consumed', function() {
        customer.drink(halfPint);
        customer.drink(pint);
        customer.drink(jug);

        expect(halfPint.quantity).toEqual(9);
        expect(pint.quantity).toEqual(19);
        expect(jug.quantity).toEqual(59);
    });

    it('Every time the customer quaffs, 4 fluid ounces are consumed', function() {
        customer.quaff(halfPint);
        customer.quaff(pint);
        customer.quaff(jug);

        expect(halfPint.quantity).toEqual(6);
        expect(pint.quantity).toEqual(16);
        expect(jug.quantity).toEqual(56);
    });

    it('Every time customer downs in one, the entire remaining contents of the glass are consumed', function(){
        customer.downInOne(halfPint);
        customer.downInOne(pint);
        customer.downInOne(jug);

        expect(halfPint.quantity).toEqual(0);
        expect(pint.quantity).toEqual(0);
        expect(jug.quantity).toEqual(0);
    });
});