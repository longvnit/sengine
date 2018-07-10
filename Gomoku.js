'use strict'

const SEngine = require('./sengine/SEngine');
const Config = require('./Config');
const Board = require('./Board');
const CircleProgress = require('./sengine/animate/CircleProgress');
//const Cell = require('./Cell');

class Gomoku {
	constructor() {
		this.sengine = new SEngine('display', 50 * Config.col_number, 50 * Config.row_number);
		this.sengine.init();
		//sengine.Input.enableInputHandler(sengine.Input.getEvent().MOUSE_MOVE, actionX);
		this.board = new Board(Config.col_number, Config.row_number, 50 * Config.col_number, 50 * Config.row_number);
		//console.log(this.board);
		//this.sengine.Display.setDebug(true);
		this.sengine.Input.enableInputHandler(this.sengine.Input.getEvent().MOUSE_UP, this.actionX.bind(this));
		

	}

	actionX() {
		//if(i == (Math.floor((Math.random() * 10) + 1)) && j == 4) {
		//	color = 'green';
		//}
		console.log('Moved');
		let cells = this.board.getCells();
		cells[2][2].setColor('green');
		console.log(this.board);
		this.circleProgress.isPlaying = true;
	}

	detectScreenSize() {
		return {
			width: document.body.clientWidth,
			heigh: document.body.clientWidth
		};
	}

	create() {

		this.circleProgress = new CircleProgress(200, 200, 100, 50, 'green', 0, 100, 5);
		//x, y, radius, lineWidth, color, start, end, duration
		this.circleProgress.addDisplay(this.sengine.Display);
		this.circleProgress.isPlaying = false;
		this.circleProgress.forever = true;

		let cells = this.board.getCells();
		let sequenceColor;
		let color;
		if(cells.length > 0) {
			for(let i = 0; i < cells.length; i++) {
				let cellRow = cells[i];
				for(let j = 0; j < cellRow.length; j++) {
					//console.log(cellRow[j]);

					// draw rect
					/*let x = i * 50;
					let y = j * 50;
					let w = 50;
					let h = 50;
*/
					
					if(sequenceColor == Config.cell_white_color) {
						sequenceColor = Config.cell_black_color;
					} else {
						sequenceColor = Config.cell_white_color;
					}

					color = sequenceColor;

					cellRow[j].setColor(color);

					//if(i == (Math.floor((Math.random() * 10) + 1)) && j == 4) {
					//	color = 'green';
					//}

					//console.log(sequenceColor);
					//console.log(this.sengine);
					//this.sengine.Graphic.drawFillRect(x, y, w, h, color);
				}
			}
		}
	}

	render() {

		

		let cells = this.board.getCells();
		let sequenceColor;
		let color;
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

					
					/*if(sequenceColor == Config.cell_white_color) {
						sequenceColor = Config.cell_black_color;
					} else {
						sequenceColor = Config.cell_white_color;
					}

					color = sequenceColor;

					cellRow.setColor(color);

					//if(i == (Math.floor((Math.random() * 10) + 1)) && j == 4) {
					//	color = 'green';
					//}

					//console.log(sequenceColor);
					//console.log(this.sengine);
					*/
					
					this.sengine.Graphic.drawFillRect(x, y, w, h, cellRow[j].getColor());
				}
			}
		}

		this.circleProgress.drawRec();
	}

	run() {
		//this.render();
		this.create();
		this.sengine.setRender(this.render.bind(this));
		this.sengine.run();
	}
}




window.onload = function() {
	var game = new Gomoku();
	game.run();
	
}