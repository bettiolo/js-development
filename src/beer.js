var Glass = function () {

	function Glass(maxVolume) {
		this.quantity = 0;
		this.capacity = maxVolume;
	}

	Glass.prototype.consume = function (quantityInOz) {
		this.quantity -= quantityInOz;
	};

	return Glass;
}();

var Pint = function () {

	function Pint() {
		Glass.call(this, 20);
		this.quantity = 20;
	}

	Pint.prototype = Object.create(Glass.prototype);
	Pint.prototype.constructor = Pint;

	return Pint;
}();

var HalfPint = function () {

	function HalfPint() {
		Glass.call(this, 10)
		this.quantity = 10;
	}

	HalfPint.prototype = Object.create(Glass.prototype);
	HalfPint.prototype.constructor = HalfPint;

	return HalfPint;
}();

var Jug = function(){

	function Jug(){
		Glass.call(this, 60);
		this.quantity = 60;
	}

	Jug.prototype = Object.create(Glass.prototype);
	Jug.prototype.constructor = Jug;

	return Jug;
}();

var Customer = function () {

	function Customer() {

	}

	Customer.prototype.drink = function (glass) {
		glass.consume(1);
	};
	Customer.prototype.quaff = function (glass) {
		glass.consume(4);
	};
	Customer.prototype.downInOne = function (glass) {
		glass.consume(glass.quantity);
	};

	return Customer;
}();