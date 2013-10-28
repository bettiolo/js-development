/*global define */

define(['pub/glass'], function (Glass) {
	'use strict';

	/**
	 * @constructor
	 * @extends {Glass}
	 */
	function Jug() {
		Glass.call(this, Glass.Size.JUG);
		this.quantity = Glass.Size.JUG;
	}

	Jug.prototype = Object.create(Glass.prototype);
	Jug.prototype.constructor = Jug;

	return Jug;
});