class Input {
	constructor(display) {
		this.setDisplay(display);
		if(display === undefined) {
			console.log('Input set Display error');
		}
	}

	getEvent() {
		return {
			TOUCH_START: 'touchstart',
			TOUCH_END: 'touchend',
			TOUCH_MOVE: 'touchmove',
			MOUSE_DOWN: 'mousedown',
			MOUSE_UP: 'mouseup',
			MOUSE_MOVE: 'mousemove'
		}
	}

	getMousePos(e) {

		this.e = e;

		if(this.e !== undefined) {

			var rect = this.getDisplay().getDisplay().getBoundingClientRect();
			var x = this.e.clientX - rect.left;
			var y = this.e.clientY - rect.top;

			this.setPosX(x);
			this.setPosY(y);

			return {
				x: this.getPosX(),
				y: this.getPosY()
			};
		} else {
			return {
				x: 0,
				y: 0
			};
		}
	}

	enableInputHandler(event, handler) {
		if(handler !== undefined && typeof handler === 'function') {
			this.display.getDisplay().addEventListener(event, function(e) {
				handler(e);
			}, false);
		} else {
			console.log('Can\'t set event handler for event: ' + event);
		}
	}

	setDisplay(display) {
		this.display = display;
	}

	getDisplay() {
		return this.display;
	}

	setPosX(posX) {
		this.posX = posX;
	}

	getPosX() {
		return this.posX;
	}

	setPosY(posY) {
		this.posY = posY;
	}

	getPosY() {
		return this.posY;
	}

}

module.exports = Input;