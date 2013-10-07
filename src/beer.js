var Glass = function () {

	function Glass(maxVolume) {
		this._maxVolume = maxVolume || 0;
		this._volume = 0;
	}

	Glass.prototype = {
		maxVolume : function () {
			return this._maxVolume;
		},
		volume : function () {
			return this._volume;
		},
		consume : function (quantity) {
			this._volume -= quantity;
		}
	};

	return Glass;
}();

var Pint = function () {

	function Pint() {
		this._volume = 20;
	}

	Pint.prototype = new Glass(20);

	return Pint;
}();

var HalfPint = function () {

	function HalfPint() {
		this._volume = 10;
	}

	HalfPint.prototype = new Glass(10);

	return HalfPint;
}();

var Jug = function(){

	function Jug(){

	}

	Jug.prototype = new Glass(60);

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