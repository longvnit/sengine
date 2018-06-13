'use strict';

class Cell {

	constructor() {

	}

	static get SIGN() {
		return {
			BLACK: 'x',
			WHITE: 'o'
		};
	}

	setRow(value) {
		this.row = value;
	}

	getRow() {
		return this.row;
	}

	setCol(value) {
		this.col = value;
	}

	getCol() {
		return this.col;
	}

	setMoveSign(value) {
		this.moveSign = value;
	}

	getMoveSign() {
		return this.moveSign;
	}

	isChecked() {
		if(this.moveSign !== undefined) {
			return true;
		}

		return false;
	}
}

module.exports = Cell;