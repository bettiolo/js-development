/*global define */

define(['pub/glass'], function (Glass) {
	'use strict';

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