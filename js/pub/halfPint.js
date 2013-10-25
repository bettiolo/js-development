/*global define */

define(['pub/glass'], function (Glass) {
    'use strict';

    /**
     * @constructor
     * @extends {Glass}
     */
    function HalfPint() {
        Glass.call(this, Glass.Size.HALF_PINT);
        this.quantity = Glass.Size.HALF_PINT;
        this.test = 'test';
    }

    HalfPint.prototype = Object.create(Glass.prototype);
    HalfPint.prototype.constructor = HalfPint;

    return HalfPint;
});