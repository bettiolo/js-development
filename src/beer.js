var Glass = function () {

	/**
	 * @constructor
	 * @param {number} capacityInOz - The capacity of the glass in oz.
	 * @abstract
	 */ // Should be @inner?
	function Glass(capacityInOz) {
		this.quantity = 0;
		this.capacity = capacityInOz;
	}

	Glass.prototype.constructor = Glass;
	Glass.prototype.consume = function (quantityInOz) {
		this.quantity -= quantityInOz;
	};

	return Glass;
}();

var Pint = function () {

	/**
	 * @constructor
	 * @extends {Glass}
	 */
	function Pint() {
		Glass.call(this, volumeInOz.PINT);
		this.quantity = volumeInOz.PINT;
	}

	Pint.prototype = Object.create(Glass.prototype);
	Pint.prototype.constructor = Pint;

	return Pint;
}();

var HalfPint = function () {

	/**
	 * @constructor
	 * @extends {Glass}
	 */
	function HalfPint() {
		Glass.call(this, volumeInOz.HALF_PINT);
		this.quantity = volumeInOz.HALF_PINT;
		this.test = 'test';
	}

	HalfPint.prototype = Object.create(Glass.prototype);
	HalfPint.prototype.constructor = HalfPint;

	return HalfPint;
}();

var Jug = function () {

	function Jug(){
		Glass.call(this, volumeInOz.JUG);
		this.quantity = volumeInOz.JUG;
	}

	Jug.prototype = Object.create(Glass.prototype);
	Jug.prototype.constructor = Jug;

	return Jug;
}();

var Customer = function () {

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
}();

/**
 * Enumerator for the beer volume in OZ.
 * @readonly
 * @enum {number}
 */
var volumeInOz = {
	PINT : 20,
	HALF_PINT : 10,
	JUG : 60
}; // should use Object.freeze?
