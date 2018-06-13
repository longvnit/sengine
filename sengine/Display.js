class Display {
	constructor() {

	}

	init(displayId, width, height) {
		this.setDisplayId(displayId);
		this.setWidth(width);
		this.setHeight(height);

		this.display = document.getElementById(this.getDisplayId());
		this.display.width = this.getWidth();
		this.display.height = this.getHeight();
		this.context = this.display.getContext('2d');
		

		return this;
	}

	render() {

	}

	clear() {
		this.context.clear(true);
	}

	setDisplayId(displayId) {
		this.displayId = displayId;
	}

	getDisplayId() {
		return this.displayId;
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

	getContext() {
		return this.context;
	}

	getDisplay() {
		return this.display;
	}
}

module.exports = Display;