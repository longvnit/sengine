'use strict'

const SEngine = require('./sengine/SEngine');
const Config = require('./Config');
const Board = require('./Board');
//const Cell = require('./Cell');

class Gomoku {
	constructor() {

	}

	detectScreenSize() {
		return {
			width: document.body.clientWidth,
			heigh: document.body.clientWidth
		};
	}
}




window.onload = function() {
	var game = new Gomoku();
	
	var sengine = new SEngine('display', 50 * Config.col_number, 50 * Config.row_number);
	sengine.init();


	function actionX(e) {

		// get mouse positon
		console.log(sengine.Input.getMousePos(e));
	}

	sengine.Input.enableInputHandler(sengine.Input.getEvent().MOUSE_MOVE, actionX);
	//console.log(sengine);

	var board = new Board(Config.col_number, Config.row_number, 50 * Config.col_number, 50 * Config.row_number);
	//console.log(board);

	//sengine.Graphic.drawFillRec(10, 10, 100, 100, 'red');

	let cells = board.getCells();
	let sequenceColor;
	if(cells.length > 0) {
		for(let i = 0; i < cells.length; i++) {
			let cellRow = cells[i];
			for(let j = 0; j < cellRow.length; j++) {
				//console.log(cellRow[j]);

				// draw rect
				let x = i * 50;
				let y = j * 50;
				let w = 50;
				let h = 50;

				
				if(sequenceColor == Config.cell_white_color) {
					sequenceColor = Config.cell_black_color;
				} else {
					sequenceColor = Config.cell_white_color;
				}

				console.log(sequenceColor);

				sengine.Graphic.drawFillRec(x, y, w, h, sequenceColor);
			}
		}
	}
}