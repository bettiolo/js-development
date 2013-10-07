var Glass = function () {

	function Glass(maxVolume) {
		this.volume = 0;
		this.maxVolume = maxVolume;
	}

	Glass.prototype.consume = function (quantityInOz) {
		this.volume -= quantityInOz;
	};

	return Glass;
}();

var Pint = function () {

	function Pint() {
		Glass.call(this, 20);
		this.volume = 20;
	}

	Pint.prototype = new Glass();
	Pint.prototype.constructor = Pint;

	return Pint;
}();

var HalfPint = function () {

	function HalfPint() {
		Glass.call(this, 10)
		this.volume = 10;
	}

	HalfPint.prototype = new Glass();
	HalfPint.prototype.constructor = HalfPint;

	return HalfPint;
}();

var Jug = function(){

	function Jug(){
		Glass.call(this, 60);
	}

	Jug.prototype = new Glass();
	Jug.prototype.constructor = Jug;

	return Jug;
}();

var Customer = function () {
	function Customer() {

	}

	Customer.prototype = {
		drink: function (glass) {
			glass.consume(1);
		},
		quaff: function (glass) {
			glass.consume(4);
		},
		downInOne : function (glass) {
			glass.consume(20);
		}
	};

	return Customer;
}();