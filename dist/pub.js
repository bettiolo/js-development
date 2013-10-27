
/*global define:true */

define('pub/glass',[], function () {
    

    /**
     * @constructor
     * @param {number} capacity The capacity of the glass in oz.
     * @abstract
     */
    function Glass(capacity) {
        this.quantity = 0;
        this.capacity = capacity;
    }

    Glass.prototype.constructor = Glass;

    /** @param {number} consumedQuantity How much has been consumed in oz. */
    Glass.prototype.consume = function (consumedQuantity) {
        this.quantity -= consumedQuantity;
    };

    /**
     * Enumerator for the beer volume in oz.
     * @constant
     * @readonly
     * @enum {number}
     */
    Glass.Size = {
        PINT : 20,
        HALF_PINT : 10,
        JUG : 60
    }; // should use Object.freeze

    return Glass;
});
/*global define */

define('pub/pint',['pub/glass'], function (Glass) {
    

    /**
     * @constructor
     * @extends {Glass}
     */
    function Pint() {
        Glass.call(this, Glass.Size.PINT);
        this.quantity = Glass.Size.PINT;
    }

    Pint.prototype = Object.create(Glass.prototype);
    Pint.prototype.constructor = Pint;

    return Pint;
});
/*global define */

define('pub/halfPint',['pub/glass'], function (Glass) {
    

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
/*global define */

define('pub/jug',['pub/glass'], function (Glass) {
    

    /**
     * @constructor
     * @extends {Glass}
     */
    function Jug(){
        Glass.call(this, Glass.Size.JUG);
        this.quantity = Glass.Size.JUG;
    }

    Jug.prototype = Object.create(Glass.prototype);
    Jug.prototype.constructor = Jug;

    return Jug;
});
/*global define */

define('pub/customer',[], function () {
    

    /** @constructor */
    function Customer() {

    }

    /** @param {Glass} glass */
    Customer.prototype.drink = function (glass) {
        glass.consume(1);
    };
    /** @param {Glass} glass */
    Customer.prototype.quaff = function (glass) {
        glass.consume(4);
    };
    /** @param {Glass} glass */
    Customer.prototype.downInOne = function (glass) {
        glass.consume(glass.quantity);
    };

    return Customer;
});
/*global define */

/**
 * The main module that defines the public interface for pub, a made-up library.
 */
define('pub',['require','pub/glass','pub/pint','pub/halfPint','pub/jug','pub/customer'],function (require) {
    

    var Glass = require('pub/glass'),
        Pint = require('pub/pint'),
        HalfPint = require('pub/halfPint'),
        Jug = require('pub/jug'),
        Customer = require('pub/customer');

    return {
        Glass : Glass,
        Pint : Pint,
        HalfPint : HalfPint,
        Jug : Jug,
        Customer : Customer
    };
});
