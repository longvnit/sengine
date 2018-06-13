'use strict';

const Display = require('./Display');
const Input = require('./Input');
const Graphic = require('./Graphic');

class SEngine {
	constructor(displayId, width, height) {
		this.displayId = displayId;
		this.width = width;
		this.height = height;
	}

	init() {
		this.Display = new Display();
		this.Display.init(this.displayId, this.width, this.height);
		this.Input = new Input(this.Display);
		this.Graphic = new Graphic(this.Display);	
	}

	create() {

	}

	update() {

	}

	debug() {

	}
}

module.exports = SEngine;