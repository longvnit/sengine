'use strict';

const Cell = require('./Cell');

class Board {

	constructor(col_number, row_number, width, height) {
		// init board config
		this.setColNumber(col_number);
		this.setRowNumber(row_number);
		this.setWidth(width);
		this.setHeight(height);

		this.cells = [];

		
		for(let i = 0; i < this.getColNumber(); i++) {
			let cellRow = [];
			for(let j = 0; j < this.getRowNumber(); j++) {
				// init cells on board
				cellRow[j] = new Cell();
				cellRow[j].setCol(i);
				cellRow[j].setRow(j);
			}

			this.cells[i] = cellRow;
		}
	}

	setColNumber(colNumber) {
		this.colNumber = colNumber;
	}

	getColNumber() {
		return this.colNumber;
	}

	setRowNumber(rowNumber) {
		this.rowNumber = rowNumber;
	}

	getRowNumber() {
		return this.rowNumber;
	}

	setWidth(width) {
		this.width = width;
	}

	getWidth() {
		return this.width;
	}

	setHeight(height) {
		this.height = height;
	}

	getHeight() {
		return this.height;
	}

	getCells() {
		return this.cells;
	}
}

module.exports = Board;